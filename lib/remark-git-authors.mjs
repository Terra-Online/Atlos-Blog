/**
 * Remark plugin that extracts unique git commit authors for the current file
 * and stores them in `vfile.data.gitAuthors` (an array of strings).
 *
 * Used together with `valueToExport: ['gitAuthors']` in fumadocs-mdx so the
 * value becomes a named MDX module export.
 */

import { execSync } from 'node:child_process';

/** @returns {import('unified').Plugin} */
export function remarkGitAuthors() {
  return function transformer(_tree, file) {
    const filePath = file.history?.[0] ?? file.path;
    if (!filePath) return;

    try {
      const raw = execSync(
        `git log --format="%aN" -- "${filePath}"`,
        { encoding: 'utf-8', timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] },
      ).trim();

      if (raw) {
        const seen = new Set();
        const unique = [];
        for (const name of raw.split('\n').map((n) => n.trim()).filter(Boolean)) {
          if (!seen.has(name)) {
            seen.add(name);
            unique.push(name);
          }
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
