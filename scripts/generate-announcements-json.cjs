const fs = require('fs');
const path = require('path');

const SUPPORTED_LOCALES = new Set(['en', 'zh-cn', 'zh-hk', 'ja', 'ko']);
const ANNOUNCEMENTS_ROOT = path.join(process.cwd(), 'content/docs/blogs/announcements');
const OUTPUT_PATH = path.join(process.cwd(), 'app/api/[locale]/announcements/data.json');
const OUTPUT_META_PATH = path.join(process.cwd(), 'app/api/[locale]/announcements/meta.json');

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

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

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

const result = {};

const markdownFiles = collectMarkdownFiles(ANNOUNCEMENTS_ROOT).sort((a, b) => a.localeCompare(b));

for (const filePath of markdownFiles) {
  const { id, locale } = parseLocaleAndId(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { frontmatterRaw, body } = splitFrontmatter(raw, filePath);
  const frontmatter = parseFrontmatter(frontmatterRaw);
  const url = '/' + locale + '/blogs/announcements/' + id;

  if (!result[locale]) {
    result[locale] = [];
  }

  result[locale].push({
    id,
    title: frontmatter.title || '',
    description: frontmatter.description || '',
    content: body,
    date: frontmatter.date ? String(frontmatter.date).trim() : '',
    url,
    locale,
  });
}

for (const locale of Object.keys(result)) {
  result[locale].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const buildVersion = String(Date.now());
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
