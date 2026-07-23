const locales = ['en', 'zh-cn', 'zh-hk', 'ja', 'ko'];
const fs = require('fs');
const path = require('path');

const generatedMetaPath = path.join(process.cwd(), 'app/api/[locale]/announcements/meta.json');

function loadDevVars() {
  const filePath = '.dev.vars';
  if (!fs.existsSync(filePath)) return {};

  const values = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

const localEnv = loadDevVars();
const env = { ...localEnv, ...process.env };
const configuredZoneId = env.CLOUDFLARE_ZONE_ID || env.CF_ZONE_ID || env.CF_BLOG_CACHE_ZONE_ID;
const apiToken = env.CF_BLOG_CACHE_API_TOKEN || env.CLOUDFLARE_API_TOKEN || env.CF_API_TOKEN;
const origin = (env.ANNOUNCEMENT_CACHE_ORIGIN || 'https://blog.opendfieldmap.org').replace(/\/+$/, '');
const zoneName =
  env.CF_BLOG_CACHE_ZONE_NAME ||
  env.CLOUDFLARE_ZONE_NAME ||
  new URL(origin).hostname.split('.').slice(-2).join('.');

const files = locales.flatMap((locale) => [
  `${origin}/api/${locale}/announcements/latest`,
  `${origin}/api/${locale}/announcements`,
]);

function readGeneratedLatestIds() {
  const metadata = JSON.parse(fs.readFileSync(generatedMetaPath, 'utf8'));
  return Object.fromEntries(
    locales.map((locale) => [locale, metadata.locales?.[locale]?.latestId ?? null]),
  );
}

async function readRemoteLatestIds() {
  const entries = await Promise.all(locales.map(async (locale) => {
    const response = await fetch(`${origin}/api/${locale}/announcements/latest`, {
      headers: { Accept: 'application/json' },
    });
    const body = await response.json().catch(() => null);
    if (!response.ok || !body || typeof body !== 'object') {
      throw new Error(`Failed to read remote latest announcement for ${locale} (HTTP ${response.status}).`);
    }
    return [locale, typeof body.latestId === 'string' ? body.latestId : null];
  }));

  return Object.fromEntries(entries);
}

async function hasNewAnnouncement() {
  const generated = readGeneratedLatestIds();
  const remote = await readRemoteLatestIds();
  const changedLocales = locales.filter((locale) => generated[locale] !== remote[locale]);

  if (changedLocales.length === 0) {
    console.log('announcement latest IDs unchanged; skipping cache purge');
    return false;
  }

  console.log(`new announcement detected for locale(s): ${changedLocales.join(', ')}`);
  return true;
}

async function resolveZoneId() {
  if (configuredZoneId) return configuredZoneId;

  const response = await fetch(`https://api.cloudflare.com/client/v4/zones?name=${encodeURIComponent(zoneName)}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
  });
  const body = await response.json().catch(() => null);

  if (!response.ok || !body?.success || !body.result?.[0]?.id) {
    console.error(`Failed to resolve Cloudflare zone id for ${zoneName}.`);
    console.error(JSON.stringify(body, null, 2));
    process.exit(1);
  }

  return body.result[0].id;
}

async function purgeCache() {
  if (!apiToken) {
    throw new Error('Missing CF_BLOG_CACHE_API_TOKEN, CLOUDFLARE_API_TOKEN, or CF_API_TOKEN.');
  }

  const zoneId = await resolveZoneId();
  const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ files }),
  });

  const body = await response.json().catch(() => null);

  if (!response.ok || !body?.success) {
    console.error('Failed to purge announcement cache.');
    console.error(JSON.stringify(body, null, 2));
    process.exit(1);
  }

  console.log(`purged ${files.length} announcement cache URLs`);
}

async function main() {
  if (!(await hasNewAnnouncement())) return;
  await purgeCache();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
