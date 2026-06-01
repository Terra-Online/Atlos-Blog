#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const fontsAssetDir = path.resolve(process.cwd(), '.open-next/assets/fonts');

fs.rmSync(fontsAssetDir, {
  recursive: true,
  force: true,
});

console.log(`removed static font assets from ${fontsAssetDir}`);
