/**
 * remark-git-meta.mjs
 *
 * A lightweight Remark plugin that runs at Astro build time and injects
 * two extra fields into every Markdown / MDX file's frontmatter:
 *
 *   gitLastUpdated  — ISO 8601 timestamp of the most-recent Git commit that
 *                     touched this file (falls back to current build time if
 *                     the file is untracked or Git is unavailable)
 *
 *   gitAuthors      — Deduplicated array of author display-names from the
 *                     full commit history for this file
 *
 * Data flow:
 *   remark visits every .md/.mdx at build time
 *   → injects into file.data.astro.frontmatter
 *   → Astro content collection schema picks them up (see content.config.ts)
 *   → accessible as entry.data.gitLastUpdated / entry.data.gitAuthors
 *     inside any Astro component via Astro.locals.starlightRoute.entry
 */

import { execSync } from 'node:child_process';

/** @returns {import('unified').Plugin} */
export function remarkGitMeta() {
  return function transformer(_tree, file) {
    // vfile.history[0] is the absolute path Astro resolved for this file
    const filePath = file.history?.[0] ?? file.path;
    if (!filePath) return;

    // Ensure the target object exists (Astro sets this up, but be safe)
    if (!file.data.astro) file.data.astro = {};
    if (!file.data.astro.frontmatter) file.data.astro.frontmatter = {};

    const fm = file.data.astro.frontmatter;

    try {
      // ── Last commit timestamp ──────────────────────────────────────────
      const rawDate = execSync(
        `git log -1 --format="%cI" -- "${filePath}"`,
        { encoding: 'utf-8', timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] }
      ).trim();

      if (rawDate) {
        fm.gitLastUpdated = rawDate; // ISO 8601 with tz offset
      }

      // ── All unique author names ────────────────────────────────────────
      const rawAuthors = execSync(
        `git log --format="%aN" -- "${filePath}"`,
        { encoding: 'utf-8', timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] }
      ).trim();

      if (rawAuthors) {
        // Deduplicate while preserving first-appearance order
        const seen = new Set();
        const unique = [];
        for (const name of rawAuthors.split('\n').map((n) => n.trim()).filter(Boolean)) {
          if (!seen.has(name)) {
            seen.add(name);
            unique.push(name);
          }
        }
        if (unique.length > 0) {
          fm.gitAuthors = unique;
        }
      }
    } catch {
      // Git not available or file not yet committed — leave fields undefined.
      // The schema marks them as optional so content collection validation passes.
    }
  };
}
