#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

let config;
try {
  config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
} catch (error) {
  console.error(error.code === 'ENOENT'
    ? 'Missing config.json. Copy config.template.json and fill in the R2 S3 credentials.'
    : 'Could not read config.json. Check that it contains valid JSON.');
  process.exit(1);
}

const r2 = config?.r2;
for (const field of ['endpoint', 'bucket', 'accessKeyId', 'secretAccessKey']) {
  if (typeof r2?.[field] !== 'string' || !r2[field].trim()) {
    console.error(`Missing r2.${field} in config.json.`);
    process.exit(1);
  }
}

if (/[:/\\]/.test(r2.bucket)) {
  throw new Error('The R2 bucket must be a bucket name without a path prefix.');
}

const concurrency = Number(r2.concurrency ?? 32);
if (!Number.isSafeInteger(concurrency) || concurrency <= 0) {
  throw new Error('R2 download concurrency must be a positive integer.');
}

const destination = path.resolve(process.env.UD_FONT_SOURCE_DIR || 'public/fonts/UD');
const args = [
  'copy', `blog:${r2.bucket}/fonts/UD`, destination,
  '--checksum',
  '--transfers', String(concurrency),
  '--checkers', String(concurrency),
  '--stats', '5s',
  '--stats-one-line',
  '--log-level', 'INFO',
];
if (process.argv.includes('--dry-run')) args.push('--dry-run');

// Credentials stay out of command arguments and the global rclone configuration.
const result = spawnSync('rclone', args, {
  env: {
    ...process.env,
    RCLONE_CONFIG_BLOG_TYPE: 's3',
    RCLONE_CONFIG_BLOG_PROVIDER: 'Cloudflare',
    RCLONE_CONFIG_BLOG_ENDPOINT: r2.endpoint,
    RCLONE_CONFIG_BLOG_REGION: r2.region || 'auto',
    RCLONE_CONFIG_BLOG_ACCESS_KEY_ID: r2.accessKeyId,
    RCLONE_CONFIG_BLOG_SECRET_ACCESS_KEY: r2.secretAccessKey,
  },
  stdio: 'inherit',
});

if (result.error) console.error(`could not run rclone: ${result.error.message}`);
if (result.status !== 0) process.exit(result.status || 1);
