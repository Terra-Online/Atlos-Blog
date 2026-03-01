/**
 * Remark plugin that extracts unique git commit authors (name + email) for
 * the current file and stores them in `vfile.data.gitAuthors`.
 *
 * Each entry is `{ name: string, email: string }`.
 * Used together with `valueToExport: ['gitAuthors']` in source.config.ts.
 */

import { execSync } from 'node:child_process';

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

/** @returns {import('unified').Plugin} */
export function remarkGitAuthors() {
  return function transformer(_tree, file) {
    const filePath = file.history?.[0] ?? file.path;
    if (!filePath) return;

    try {
      // Lazy-build the global noreply lookup once.
      if (_noreplyMap === null) {
        const raw = execSync('git rev-parse --show-toplevel', {
          encoding: 'utf-8', timeout: 3000, stdio: ['pipe', 'pipe', 'pipe'],
        }).trim();
        _noreplyMap = buildGlobalNoreplyMap(raw);
      }

      // --follow to handle renames; %aN = author name, %aE = author email
      const raw = execSync(
        `git log --follow --format="%aN\t%aE" -- "${filePath}"`,
        { encoding: 'utf-8', timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] },
      ).trim();

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
