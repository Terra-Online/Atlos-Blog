/**
 * Remark plugin that extracts unique git commit authors (name + email) for
 * the current file and stores them in `vfile.data.gitAuthors`.
 *
 * Each entry is `{ name: string, email: string }`.
 * Used together with `valueToExport: ['gitAuthors']` in source.config.ts.
 */

import { execSync } from 'node:child_process';

/** @returns {import('unified').Plugin} */
export function remarkGitAuthors() {
  return function transformer(_tree, file) {
    const filePath = file.history?.[0] ?? file.path;
    if (!filePath) return;

    try {
      // --follow to handle renames; %aN = author name, %aE = committer email
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
          const email = line.slice(tab + 1).trim();
          if (name && !seen.has(name)) {
            seen.add(name);
            unique.push({ name, email });
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
