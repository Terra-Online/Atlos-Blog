#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const bucket = process.env.BLOG_MEDIA_R2_BUCKET || 'opendfieldmap-blog';
const sourceDir = path.resolve(process.cwd(), process.env.BLOG_MEDIA_SOURCE_DIR || 'public/blogs');
const cacheControl =
  process.env.BLOG_MEDIA_CACHE_CONTROL ||
  'public, max-age=31536000, stale-while-revalidate=604800';
const dryRun = process.argv.includes('--dry-run');
const local = process.argv.includes('--local');

const contentTypes = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

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

function upload(filePath) {
  const relativePath = path.relative(sourceDir, filePath).split(path.sep).join('/');
  const key = `blogs/${relativePath}`;
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

  console.log(`uploading ${relativePath} -> ${destination}`);
  const result = spawnSync('wrangler', args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

if (!fs.existsSync(sourceDir)) {
  console.error(`source directory not found: ${sourceDir}`);
  process.exit(1);
}

const files = collectFiles(sourceDir).sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log(`no files found under ${sourceDir}`);
  process.exit(0);
}

for (const file of files) {
  upload(file);
}

console.log(`${dryRun ? 'checked' : 'uploaded'} ${files.length} file(s)`);
