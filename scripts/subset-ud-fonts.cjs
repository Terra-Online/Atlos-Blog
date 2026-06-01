#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const announcementsRoot = path.resolve(process.cwd(), 'content/blogs/announcements');
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

const localeConfigs = [
  {
    name: 'zh-cn',
    suffix: '.zh-cn',
    textSuffixes: ['.zh-cn'],
    fonts: ['UDShinGo_CN_R.woff2', 'UDShinGo_CN_M.woff2', 'UDShinGo_CN_DB.woff2'],
  },
  {
    name: 'zh-hk',
    suffix: '.zh-hk',
    textSuffixes: ['.zh-hk'],
    fonts: ['UDShinGo_HK_R.woff2', 'UDShinGo_HK_M.woff2', 'UDShinGo_HK_DB.woff2'],
  },
  {
    name: 'ja',
    suffix: '.ja',
    textSuffixes: ['.ja'],
    fonts: ['UDShinGo_JP_R.woff2', 'UDShinGo_JP_M.woff2', 'UDShinGo_JP_DB.woff2'],
  },
];

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

function getLocaleText(files, config) {
  const matchedFiles = files.filter((file) => {
    const baseName = path.basename(file).replace(/\.(md|mdx)$/, '');
    return config.textSuffixes.some((suffix) => baseName.endsWith(suffix));
  });

  if (matchedFiles.length === 0) {
    throw new Error(`No announcement files found for ${config.name}`);
  }

  return matchedFiles
    .sort((a, b) => a.localeCompare(b))
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n');
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

if (!fs.existsSync(announcementsRoot)) {
  console.error(`announcements directory not found: ${announcementsRoot}`);
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`UD font source directory not found: ${sourceDir}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'oem-ud-subset-'));
const announcementFiles = collectMarkdownFiles(announcementsRoot);

try {
  for (const config of localeConfigs) {
    const localeText = uniqueText(`${commonText}\n${getLocaleText(announcementFiles, config)}`);
    const textFile = path.join(tempDir, `${config.name}.txt`);
    fs.writeFileSync(textFile, localeText, 'utf8');

    for (const fontName of config.fonts) {
      const sourceFile = path.join(sourceDir, fontName);
      const outputFile = path.join(outputDir, fontName);

      if (!fs.existsSync(sourceFile)) {
        console.error(`UD font source file not found: ${sourceFile}`);
        process.exit(1);
      }

      console.log(`subsetting ${fontName} for ${config.name} with ${Array.from(localeText).length} chars`);
      subsetFont(sourceFile, outputFile, textFile);
    }
  }
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log(`wrote UD font subsets to ${outputDir}`);
