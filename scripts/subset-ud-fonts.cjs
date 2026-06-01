#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const contentRoot = path.resolve(process.cwd(), 'content');
const sourceDir = path.resolve(process.cwd(), process.env.UD_FONT_SOURCE_DIR || 'public/fonts/UD');
const outputDir = path.resolve(process.cwd(), process.env.UD_FONT_SUBSET_DIR || 'public/fonts/UD_subset');
const pyftsubset = process.env.PYFTSUBSET_BIN || 'pyftsubset';

const commonText = [
  'Open Endfield Map',
  'OEM',
  '0123456789',
  'abcdefghijklmnopqrstuvwxyz',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ' \n\t',
  '.,;:!?()[]{}<>/\\|-_+=*&%$#@"\'`~',
  '，。？！、；：「」『』（）【】《》〈〉—…·～',
].join('');

function collectMarkdownFiles(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function uniqueText(value) {
  return Array.from(new Set(Array.from(value))).sort().join('');
}

function subsetFont(sourceFile, outputFile, textFile) {
  const args = [
    sourceFile,
    `--output-file=${outputFile}`,
    `--text-file=${textFile}`,
    '--flavor=woff2',
    '--layout-features=*',
    '--no-hinting',
  ];

  const result = spawnSync(pyftsubset, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

if (!fs.existsSync(contentRoot)) {
  console.error(`content directory not found: ${contentRoot}`);
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`UD font source directory not found: ${sourceDir}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'oem-ud-subset-'));
const contentFiles = collectMarkdownFiles(contentRoot);
const contentText = uniqueText(
  `${commonText}\n${contentFiles
    .sort((a, b) => a.localeCompare(b))
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n')}`,
);

try {
  const textFile = path.join(tempDir, 'content.txt');
  fs.writeFileSync(textFile, contentText, 'utf8');

  const fontGroups = [
    ['UDShinGo_CN_R.woff2', 'UDShinGo_CN_M.woff2', 'UDShinGo_CN_DB.woff2'],
    ['UDShinGo_HK_R.woff2', 'UDShinGo_HK_M.woff2', 'UDShinGo_HK_DB.woff2'],
    ['UDShinGo_JP_R.woff2', 'UDShinGo_JP_M.woff2', 'UDShinGo_JP_DB.woff2'],
  ];

  for (const group of fontGroups) {
    for (const fontName of group) {
      const sourceFile = path.join(sourceDir, fontName);
      const outputFile = path.join(outputDir, fontName);

      if (!fs.existsSync(sourceFile)) {
        console.error(`UD font source file not found: ${sourceFile}`);
        process.exit(1);
      }

      console.log(`subsetting ${fontName} from entire content tree with ${Array.from(contentText).length} chars`);
      subsetFont(sourceFile, outputFile, textFile);
    }
  }
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log(`wrote UD font subsets to ${outputDir}`);
