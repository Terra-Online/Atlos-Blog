#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const fonttools = process.env.FONTTOOLS_BIN || 'fonttools';
const geistDir = path.resolve(process.cwd(), process.env.GEIST_FONT_DIR || 'public/fonts/Geist');

const flavors = [
  { extension: '.woff', flavor: 'woff', magic: 'wOFF' },
  { extension: '.woff2', flavor: 'woff2', magic: 'wOF2' },
];

function fail(message) {
  console.error(message);
  process.exit(1);
}

function assertMagic(filePath, expectedMagic) {
  const header = fs.readFileSync(filePath, { encoding: 'latin1', flag: 'r' }).slice(0, 4);

  if (header !== expectedMagic) {
    fail(`generated ${filePath} has invalid header ${JSON.stringify(header)}, expected ${expectedMagic}`);
  }
}

function generateFont(sourceFile, outputFile, flavor) {
  const tempFile = path.join(path.dirname(outputFile), `.${path.basename(outputFile)}.${process.pid}.tmp`);

  const result = spawnSync(fonttools, [
    'ttLib',
    '--no-recalc-timestamp',
    '--flavor',
    flavor,
    '-o',
    tempFile,
    sourceFile,
  ], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    fs.rmSync(tempFile, { force: true });
    process.exit(result.status || 1);
  }

  fs.renameSync(tempFile, outputFile);
}

if (!fs.existsSync(geistDir)) {
  fail(`Geist font directory not found: ${geistDir}`);
}

const sourceFiles = fs.readdirSync(geistDir)
  .filter((entry) => entry.endsWith('.ttf'))
  .sort((a, b) => a.localeCompare(b));

if (sourceFiles.length === 0) {
  fail(`no Geist .ttf files found in ${geistDir}`);
}

for (const sourceName of sourceFiles) {
  const sourceFile = path.join(geistDir, sourceName);
  const basename = path.basename(sourceName, '.ttf');

  assertMagic(sourceFile, '\x00\x01\x00\x00');

  for (const { extension, flavor, magic } of flavors) {
    const outputFile = path.join(geistDir, `${basename}${extension}`);

    console.log(`generating ${path.relative(process.cwd(), outputFile)} from ${path.relative(process.cwd(), sourceFile)}`);
    generateFont(sourceFile, outputFile, flavor);
    assertMagic(outputFile, magic);
  }
}

console.log(`wrote Geist web fonts to ${geistDir}`);
