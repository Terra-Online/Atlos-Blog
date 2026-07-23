const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SUPPORTED_LOCALES = new Set(['en', 'zh-cn', 'zh-hk', 'ja', 'ko', 'ru']);
const ANNOUNCEMENTS_ROOT = path.join(process.cwd(), 'content/blogs/announcements');
const OUTPUT_PATH = path.join(process.cwd(), 'app/api/[locale]/announcements/data.json');
const OUTPUT_META_PATH = path.join(process.cwd(), 'app/api/[locale]/announcements/meta.json');
const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.opendfieldmap.org').replace(/\/+$/, '');
const ASSET_ORIGIN = (process.env.NEXT_PUBLIC_ASSET_URL || SITE_ORIGIN).replace(/\/+$/, '');
const ANNOUNCEMENTS_LIMIT = 6;

function collectMarkdownFiles(dirPath) {
  const files = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseLocaleAndId(filePath) {
  const fileName = path.basename(filePath, '.md');
  const localeMatch = fileName.match(/\.([a-z]{2}(?:-[a-z]{2})?)$/i);

  if (!localeMatch) {
    return { id: fileName, locale: 'en' };
  }

  const locale = localeMatch[1].toLowerCase();
  if (!SUPPORTED_LOCALES.has(locale)) {
    return { id: fileName, locale: 'en' };
  }

  return {
    id: fileName.slice(0, -locale.length - 1),
    locale,
  };
}

function getAnnouncementPagePath(filePath, id) {
  const relativeDir = path.dirname(path.relative(ANNOUNCEMENTS_ROOT, filePath));
  const segments = ['blogs', 'announcements'];

  if (relativeDir !== '.') {
    segments.push(...relativeDir.split(path.sep).filter(Boolean));
  }

  segments.push(id);
  return '/' + segments.join('/');
}

function splitFrontmatter(raw, filePath) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n([\s\S]*))?$/);
  if (!match) {
    throw new Error('frontmatter parse failed: ' + path.relative(ANNOUNCEMENTS_ROOT, filePath));
  }

  return {
    frontmatterRaw: match[1],
    body: (match[2] || '').trim(),
  };
}

function parseFrontmatter(frontmatterRaw) {
  const parsed = {};
  const lines = frontmatterRaw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) continue;

    let key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (key.startsWith('"') && key.endsWith('"')) ||
      (key.startsWith('\'') && key.endsWith('\''))
    ) {
      key = key.slice(1, -1);
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith('\'') && value.endsWith('\''))
    ) {
      value = value.slice(1, -1);
    }

    parsed[key] = value;
  }

  return parsed;
}

function getDateTime(value) {
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
}

function compareAnnouncementsByDateDesc(a, b) {
  const aTime = getDateTime(a.date);
  const bTime = getDateTime(b.date);
  if (aTime !== bTime) return bTime - aTime;

  return a.id.localeCompare(b.id);
}

function localizedPath(pathname, locale) {
  const cleaned = pathname.replace(/^\/+/, '');

  if ([...SUPPORTED_LOCALES].some((item) => cleaned === item || cleaned.startsWith(item + '/'))) {
    return '/' + cleaned;
  }

  return '/' + locale + '/' + cleaned;
}

function toAbsoluteUrl(target, locale, { asset = false } = {}) {
  const cleaned = target.trim();

  if (
    cleaned.startsWith('http://') ||
    cleaned.startsWith('https://') ||
    cleaned.startsWith('mailto:') ||
    cleaned.startsWith('tel:') ||
    cleaned.startsWith('#') ||
    cleaned.startsWith('//')
  ) {
    return target;
  }

  const [withoutHash, hash = ''] = cleaned.split('#');
  const [withoutQuery, query = ''] = withoutHash.split('?');
  let pathname = withoutQuery;

  if (pathname.startsWith('../../../')) {
    pathname = pathname.slice(9);
  } else if (pathname.startsWith('./')) {
    pathname = pathname.slice(2);
  }

  const isAsset =
    asset ||
    /^\/?(?:media|icons)\//.test(pathname) ||
    /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(pathname);
  const origin = isAsset ? ASSET_ORIGIN : SITE_ORIGIN;
  const absolutePath = isAsset
    ? '/' + pathname.replace(/^\/+/, '')
    : localizedPath(pathname, locale);
  const suffix = (query ? '?' + query : '') + (hash ? '#' + hash : '');

  return origin + absolutePath + suffix;
}

function toAbsoluteAnnouncementLinks(content, locale) {
  const normalizeTarget = (target) => {
    const cleaned = target.trim();
    if (
      cleaned.startsWith('http://') ||
      cleaned.startsWith('https://') ||
      cleaned.startsWith('mailto:') ||
      cleaned.startsWith('#') ||
      cleaned.startsWith('//')
    ) {
      return null;
    }

    if (cleaned.startsWith('../../../')) {
      return cleaned.slice(9);
    }

    if (cleaned.startsWith('./')) {
      return cleaned.slice(2);
    }

    return null;
  };

  const legacyToAbsoluteUrl = (target) => {
    const normalized = normalizeTarget(target);
    if (normalized === null) return toAbsoluteUrl(target, locale);

    return toAbsoluteUrl(normalized, locale);
  };

  return content
    .replaceAll(/src="([^"]+)"/g, (_match, target) => `src="${toAbsoluteUrl(target, locale, { asset: true })}"`)
    .replaceAll(/href="([^"]+)"/g, (_match, target) => `href="${legacyToAbsoluteUrl(target)}"`)
    .replaceAll(/(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+("[^"]*"|'[^']*'))?\)/g, (_match, bang, label, target, title = '') => {
      const absolute = toAbsoluteUrl(target, locale, { asset: bang === '!' });
      return `${bang}[${label}](${absolute}${title ? ' ' + title : ''})`;
    });
}

const result = {};

const markdownFiles = collectMarkdownFiles(ANNOUNCEMENTS_ROOT).sort((a, b) => a.localeCompare(b));

for (const filePath of markdownFiles) {
  const { id, locale } = parseLocaleAndId(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { frontmatterRaw, body } = splitFrontmatter(raw, filePath);
  const frontmatter = parseFrontmatter(frontmatterRaw);
  const url = toAbsoluteUrl(getAnnouncementPagePath(filePath, id), locale);

  if (!result[locale]) {
    result[locale] = [];
  }

  result[locale].push({
    id,
    title: frontmatter.title || '',
    description: frontmatter.description || '',
    content: toAbsoluteAnnouncementLinks(body, locale),
    date: frontmatter.date ? String(frontmatter.date).trim() : '',
    url,
    locale,
  });
}

for (const locale of Object.keys(result)) {
  result[locale].sort(compareAnnouncementsByDateDesc);
  result[locale] = result[locale].slice(0, ANNOUNCEMENTS_LIMIT);
}

const buildVersion = crypto
  .createHash('sha256')
  .update(JSON.stringify(result))
  .digest('hex')
  .slice(0, 16);
const localesMeta = {};
for (const locale of SUPPORTED_LOCALES) {
  const latestItem = result[locale]?.[0];
  localesMeta[locale] = {
    latestId: latestItem?.id ?? null,
  };
}

const metadata = {
  version: buildVersion,
  locales: localesMeta,
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2) + '\n', 'utf8');
fs.writeFileSync(OUTPUT_META_PATH, JSON.stringify(metadata, null, 2) + '\n', 'utf8');
console.log('wrote', OUTPUT_PATH);
console.log('wrote', OUTPUT_META_PATH);
