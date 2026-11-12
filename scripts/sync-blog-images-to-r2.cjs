#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const dryRun = process.argv.includes('--dry-run');
const local = process.argv.includes('--local');
const r2 = local ? undefined : readConfig();
const bucket = process.env.BLOG_MEDIA_R2_BUCKET || r2?.bucket || 'opendfieldmap-blog';
const cacheControl =
  process.env.BLOG_MEDIA_CACHE_CONTROL ||
  'public, max-age=31536000, stale-while-revalidate=604800';
const concurrency = Number(process.env.BLOG_MEDIA_UPLOAD_CONCURRENCY ?? r2?.concurrency ?? 32);

if (!bucket || /[:/\\]/.test(bucket)) {
  throw new Error('The R2 bucket must be a bucket name without a path prefix.');
}

if (!local && (!Number.isSafeInteger(concurrency) || concurrency <= 0)) {
  throw new Error('R2 upload concurrency must be a positive integer.');
}

function readConfig() {
  let config;
  try {
    config = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'config.json'), 'utf8'));
  } catch (error) {
    console.error(error.code === 'ENOENT'
      ? 'Missing config.json. Copy config.template.json and fill in the R2 S3 credentials.'
      : 'Could not read config.json. Check that it contains valid JSON.');
    process.exit(1);
  }

  for (const field of ['endpoint', 'bucket', 'accessKeyId', 'secretAccessKey']) {
    if (typeof config?.r2?.[field] !== 'string' || !config.r2[field].trim()) {
      console.error(`Missing r2.${field} in config.json.`);
      process.exit(1);
    }
  }

  return config.r2;
}

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

function run(command, args, env = {}) {
  const result = spawnSync(command, args, {
    env: {
      ...process.env,
      ...env,
      NODE_OPTIONS: [process.env.NODE_OPTIONS, '--dns-result-order=ipv4first'].filter(Boolean).join(' '),
    },
    stdio: 'inherit',
    shell: command === 'wrangler' && process.platform === 'win32',
  });

  if (result.error) {
    console.error(`could not run ${command}: ${result.error.message}`);
  }

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function uploadLocal(filePath, group) {
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
    '--local',
  ];

  if (dryRun) {
    console.log(`[dry-run] wrangler ${args.join(' ')}`);
    return;
  }

  console.log(`uploading ${group.name}: ${relativePath} -> ${destination}`);
  run('wrangler', args);
}

function uploadRemote(group) {
  const destination = `blog:${bucket}/${group.keyPrefix}`;
  console.log(`${dryRun ? 'checking' : 'copying'} ${group.sourceDir} -> ${destination} (${concurrency} transfers)`);

  // Copy retains remote-only assets; checksums also skip files whose build timestamps changed.
  const args = [
    'copy',
    group.sourceDir,
    destination,
    '--checksum',
    '--transfers', String(concurrency),
    '--checkers', String(concurrency),
    '--s3-no-check-bucket',
    '--header-upload', `Cache-Control: ${cacheControl}`,
    '--stats', '5s',
    '--stats-one-line',
    '--log-level', 'INFO',
  ];

  if (dryRun) {
    args.push('--dry-run');
  }

  // Keep credentials out of command arguments and the user's global rclone configuration.
  run('rclone', args, {
    RCLONE_CONFIG_BLOG_TYPE: 's3',
    RCLONE_CONFIG_BLOG_PROVIDER: 'Cloudflare',
    RCLONE_CONFIG_BLOG_ENDPOINT: r2.endpoint,
    RCLONE_CONFIG_BLOG_REGION: r2.region || 'auto',
    RCLONE_CONFIG_BLOG_ACCESS_KEY_ID: r2.accessKeyId,
    RCLONE_CONFIG_BLOG_SECRET_ACCESS_KEY: r2.secretAccessKey,
  });
}

// Validate both inputs before starting any uploads.
for (const group of assetGroups) {
  if (!fs.existsSync(group.sourceDir) || !fs.statSync(group.sourceDir).isDirectory()) {
    console.error(`source directory not found for ${group.name}: ${group.sourceDir}`);
    process.exit(1);
  }
}

let fileCount = 0;

for (const group of assetGroups) {
  const files = collectFiles(group.sourceDir).sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    console.log(`no files found under ${group.sourceDir}`);
    continue;
  }

  if (local) {
    for (const file of files) {
      uploadLocal(file, group);
    }
  } else {
    uploadRemote(group);
  }

  fileCount += files.length;
}

console.log(`${dryRun ? 'checked' : 'processed'} ${fileCount} file(s)`);
