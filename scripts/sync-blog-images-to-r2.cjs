#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const bucket = process.env.BLOG_MEDIA_R2_BUCKET || 'opendfieldmap-blog';
const cacheControl =
  process.env.BLOG_MEDIA_CACHE_CONTROL ||
  'public, max-age=31536000, stale-while-revalidate=604800';
const dryRun = process.argv.includes('--dry-run');
const local = process.argv.includes('--local');

const contentTypes = {
  '.avif': 'image/avif',
  '.eot': 'application/vnd.ms-fontobject',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webp': 'image/webp',
};

const assetGroups = [
  {
    name: 'blog media',
    sourceDir: path.resolve(process.cwd(), process.env.BLOG_MEDIA_SOURCE_DIR || 'public/blogs'),
    keyPrefix: 'blogs',
  },
  {
    name: 'blog fonts',
    sourceDir: path.resolve(process.cwd(), process.env.BLOG_FONT_SOURCE_DIR || 'public/fonts'),
    keyPrefix: 'fonts',
  },
];

function collectFiles(dir) {
  const result = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result.push(...collectFiles(fullPath));
      continue;
    }

    if (entry.isFile()) {
      result.push(fullPath);
    }
  }

  return result;
}

function upload(filePath, group) {
  const relativePath = path.relative(group.sourceDir, filePath).split(path.sep).join('/');
  const key = `${group.keyPrefix}/${relativePath}`;
  const contentType = contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  const destination = `${bucket}/${key}`;

  const args = [
    'r2',
    'object',
    'put',
    destination,
    '--file',
    filePath,
    '--content-type',
    contentType,
    '--cache-control',
    cacheControl,
    local ? '--local' : '--remote',
  ];

  if (dryRun) {
    console.log(`[dry-run] wrangler ${args.join(' ')}`);
    return;
  }

  console.log(`uploading ${group.name}: ${relativePath} -> ${destination}`);
  const result = spawnSync('wrangler', args, {
    env: {
      ...process.env,
      NODE_OPTIONS: [process.env.NODE_OPTIONS, '--dns-result-order=ipv4first'].filter(Boolean).join(' '),
    },
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

let uploadedCount = 0;

for (const group of assetGroups) {
  if (!fs.existsSync(group.sourceDir)) {
    console.error(`source directory not found for ${group.name}: ${group.sourceDir}`);
    process.exit(1);
  }

  const files = collectFiles(group.sourceDir).sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log(`no files found under ${group.sourceDir}`);
    continue;
  }

  for (const file of files) {
    upload(file, group);
  }

  uploadedCount += files.length;
}

console.log(`${dryRun ? 'checked' : 'uploaded'} ${uploadedCount} file(s)`);
