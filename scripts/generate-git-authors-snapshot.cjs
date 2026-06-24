const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CONTENT_ROOT = path.join(process.cwd(), 'content');
const OUTPUT_PATH = path.join(process.cwd(), 'git-authors-snapshot.json');

function collectContentFiles(dirPath) {
  const files = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectContentFiles(fullPath));
      continue;
    }

    if (entry.isFile() && /\.(?:md|mdx)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function getRepoRoot() {
  return execFileSync('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf-8',
    timeout: 3000,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
}

function buildGlobalNoreplyMap(root) {
  const map = new Map();

  try {
    const raw = execFileSync('git', ['log', '--all', '--format=%aN%x09%aE'], {
      cwd: root,
      encoding: 'utf-8',
      timeout: 5000,
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();

    for (const line of raw.split('\n').map((item) => item.trim()).filter(Boolean)) {
      const tab = line.indexOf('\t');
      if (tab === -1) continue;

      const name = line.slice(0, tab).trim();
      const email = line.slice(tab + 1).trim();
      if (!name) continue;

      if (/@users\.noreply\.github\.com$/i.test(email) || !map.has(name)) {
        map.set(name, email);
      }
    }
  } catch {
    // Git metadata is optional in some local environments.
  }

  return map;
}

function legacyPaths(filePath) {
  const paths = [filePath];

  if (filePath.startsWith('content/docs/')) {
    paths.push(filePath.replace('content/docs/', 'content/docs/docs/'));
  }

  if (filePath.startsWith('content/blogs/')) {
    paths.push(filePath.replace('content/blogs/', 'content/docs/blogs/'));
  }

  if (filePath.startsWith('content/community/')) {
    paths.push(filePath.replace('content/community/', 'content/docs/community/'));
  }

  if (filePath.startsWith('content/sponsors/')) {
    paths.push(filePath.replace('content/sponsors/', 'content/docs/sponsors/'));
    paths.push(filePath.replace('content/sponsors/', 'content/docs/more/'));
  }

  return Array.from(new Set(paths));
}

function readRawHistory(paths, root) {
  for (const gitPath of paths) {
    try {
      const raw = execFileSync(
        'git',
        ['log', '--all', '--follow', '--format=%aN%x09%aE%x09%cI', '--', gitPath],
        {
          cwd: root,
          encoding: 'utf-8',
          timeout: 5000,
          stdio: ['pipe', 'pipe', 'pipe'],
        },
      ).trim();

      if (raw) return raw;
    } catch {
      // Fall through to the next legacy path.
    }
  }

  return '';
}

function buildSnapshot() {
  const root = getRepoRoot();
  const noreplyMap = buildGlobalNoreplyMap(root);
  const snapshot = {};
  const files = collectContentFiles(CONTENT_ROOT)
    .map((filePath) => path.relative(root, filePath))
    .map(toPosix)
    .sort((a, b) => a.localeCompare(b));

  for (const filePath of files) {
    const raw = readRawHistory(legacyPaths(filePath), root);
    const seen = new Set();
    const authors = [];
    let lastModified;
    let createdAt;

    for (const line of raw.split('\n').map((item) => item.trim()).filter(Boolean)) {
      const parts = line.split('\t');
      if (parts.length < 3) continue;

      const timestamp = parts[2].trim();
      if (!lastModified) {
        lastModified = timestamp;
      }

      createdAt = timestamp;

      const name = parts[0].trim();
      if (!name || seen.has(name)) continue;

      seen.add(name);
      authors.push({
        name,
        email: noreplyMap.get(name) ?? parts[1].trim(),
      });
    }

    const keys = legacyPaths(filePath);
    const entry = {
      authors,
      lastModified: lastModified || undefined,
      createdAt: createdAt || undefined,
    };

    for (const key of keys) {
      if (!snapshot[key]) {
        snapshot[key] = entry;
      }
    }
  }

  return snapshot;
}

const snapshot = buildSnapshot();

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(snapshot, null, 2) + '\n', 'utf8');
console.log('wrote', OUTPUT_PATH);
