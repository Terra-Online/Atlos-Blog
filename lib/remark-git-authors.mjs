/**
 * Remark plugin that extracts unique git commit authors (name + email) for
 * the current file and stores them in `vfile.data.gitAuthors`.
 *
 * Each entry is `{ name: string, email: string }`.
 * Used together with `valueToExport: ['gitAuthors']` in source.config.ts.
 */

import { execSync } from 'node:child_process';
import path from 'node:path';

/**
 * Build a repo-wide map of  author-name -> preferred-email.
 * A noreply GitHub email always wins because it encodes the numeric user ID
 * needed for accurate avatar resolution via avatars.githubusercontent.com.
 * @param {string} repoRoot  absolute path of the git repo root
 * @returns {Map<string, string>}
 */
function buildGlobalNoreplyMap(repoRoot) {
  /** @type {Map<string, string>} name -> best email */
  const map = new Map();
  try {
    const raw = execSync(
      'git log --all --format="%aN\t%aE"',
      { encoding: 'utf-8', timeout: 5000, cwd: repoRoot, stdio: ['pipe', 'pipe', 'pipe'] },
    ).trim();
    for (const line of raw.split('\n').map((l) => l.trim()).filter(Boolean)) {
      const tab = line.indexOf('\t');
      if (tab === -1) continue;
      const name = line.slice(0, tab).trim();
      const email = line.slice(tab + 1).trim();
      if (!name) continue;
      const isNoreply = /@users\.noreply\.github\.com$/i.test(email);
      // Only upgrade; never downgrade a noreply entry we already have.
      if (isNoreply || !map.has(name)) {
        map.set(name, email);
      }
    }
  } catch {
    // git unavailable — return empty map, fall back to per-file emails
  }
  return map;
}

/** Cached globally so we only run the heavy git log once per process. */
let _noreplyMap = /** @type {Map<string, string> | null} */ (null);
let _repoRoot = /** @type {string | null} */ (null);

function getRepoRoot() {
  if (_repoRoot) return _repoRoot;

  _repoRoot = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf-8',
    timeout: 3000,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();

  return _repoRoot;
}

function toGitPath(filePath, repoRoot) {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(repoRoot, filePath);

  return path.relative(repoRoot, absolutePath);
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

function readGitAuthors(paths, repoRoot) {
  for (const gitPath of paths) {
    const raw = execSync(
      `git log --all --follow --format="%aN\t%aE" -- "${gitPath}"`,
      {
        encoding: 'utf-8',
        timeout: 5000,
        cwd: repoRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
      },
    ).trim();

    if (raw) return raw;
  }

  return '';
}

/** @returns {import('unified').Plugin} */
export function remarkGitAuthors() {
  return function transformer(_tree, file) {
    const filePath = file.history?.[0] ?? file.path;
    if (!filePath) return;

    try {
      const repoRoot = getRepoRoot();

      // Lazy-build the global noreply lookup once.
      if (_noreplyMap === null) {
        _noreplyMap = buildGlobalNoreplyMap(repoRoot);
      }

      const gitPath = toGitPath(filePath, repoRoot);
      const raw = readGitAuthors(legacyPaths(gitPath), repoRoot);

      if (raw) {
        const seen = new Set();
        const unique = [];
        for (const line of raw.split('\n').map((l) => l.trim()).filter(Boolean)) {
          const tab = line.indexOf('\t');
          if (tab === -1) continue;
          const name = line.slice(0, tab).trim();
          if (!name || seen.has(name)) continue;
          seen.add(name);
          // Prefer the noreply email from the global map if available.
          const email = _noreplyMap.get(name) ?? line.slice(tab + 1).trim();
          unique.push({ name, email });
        }
        if (unique.length > 0) {
          file.data.gitAuthors = unique;
        }
      }
    } catch {
      // Git unavailable or file untracked — leave undefined
    }
  };
}
