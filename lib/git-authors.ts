import { execFileSync } from 'node:child_process';
import path from 'node:path';

export interface GitAuthor {
  name: string;
  email: string;
}

export type LastModifiedInput = Date | string | number | undefined;

let repoRoot: string | null = null;
let noreplyMap: Map<string, string> | null = null;
const authorCache = new Map<string, GitAuthor[]>();
const lastModifiedCache = new Map<string, Date | undefined>();

function getRepoRoot() {
  if (repoRoot) return repoRoot;

  repoRoot = execFileSync('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf-8',
    timeout: 3000,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();

  return repoRoot;
}

function buildGlobalNoreplyMap(root: string) {
  const map = new Map<string, string>();

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
    // Git metadata is optional in some deployment environments.
  }

  return map;
}

function getNoreplyMap(root: string) {
  if (!noreplyMap) {
    noreplyMap = buildGlobalNoreplyMap(root);
  }

  return noreplyMap;
}

function toGitPath(filePath: string, root: string) {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(root, filePath);

  return path.relative(root, absolutePath);
}

function legacyPaths(filePath: string) {
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

function readRawAuthors(paths: string[], root: string) {
  for (const gitPath of paths) {
    const raw = execFileSync(
      'git',
      ['log', '--all', '--follow', '--format=%aN%x09%aE', '--', gitPath],
      {
        cwd: root,
        encoding: 'utf-8',
        timeout: 5000,
        stdio: ['pipe', 'pipe', 'pipe'],
      },
    ).trim();

    if (raw) return raw;
  }

  return '';
}

function readRawLastModified(paths: string[], root: string) {
  for (const gitPath of paths) {
    const raw = execFileSync(
      'git',
      ['log', '--all', '--follow', '-1', '--format=%cI', '--', gitPath],
      {
        cwd: root,
        encoding: 'utf-8',
        timeout: 5000,
        stdio: ['pipe', 'pipe', 'pipe'],
      },
    ).trim();

    if (raw) return raw;
  }

  return '';
}

export function getGitAuthorsForContentPath(filePath: string): GitAuthor[] {
  if (authorCache.has(filePath)) return authorCache.get(filePath)!;

  try {
    const root = getRepoRoot();
    const raw = readRawAuthors(legacyPaths(toGitPath(filePath, root)), root);
    const preferredEmails = getNoreplyMap(root);
    const seen = new Set<string>();
    const authors: GitAuthor[] = [];

    for (const line of raw.split('\n').map((item) => item.trim()).filter(Boolean)) {
      const tab = line.indexOf('\t');
      if (tab === -1) continue;

      const name = line.slice(0, tab).trim();
      if (!name || seen.has(name)) continue;

      seen.add(name);
      authors.push({
        name,
        email: preferredEmails.get(name) ?? line.slice(tab + 1).trim(),
      });
    }

    authorCache.set(filePath, authors);
    return authors;
  } catch {
    authorCache.set(filePath, []);
    return [];
  }
}

export function getGitLastModifiedForContentPath(filePath: string): Date | undefined {
  if (lastModifiedCache.has(filePath)) return lastModifiedCache.get(filePath);

  try {
    const root = getRepoRoot();
    const raw = readRawLastModified(legacyPaths(toGitPath(filePath, root)), root);
    const date = raw ? new Date(raw) : undefined;
    const lastModified =
      date && !Number.isNaN(date.getTime()) ? date : undefined;

    lastModifiedCache.set(filePath, lastModified);
    return lastModified;
  } catch {
    lastModifiedCache.set(filePath, undefined);
    return undefined;
  }
}

export function resolveContentLastModified(
  filePath: string,
  current?: LastModifiedInput,
): LastModifiedInput {
  const currentDate = current ? new Date(current) : null;

  if (currentDate && !Number.isNaN(currentDate.getTime())) {
    return current;
  }

  return getGitLastModifiedForContentPath(filePath);
}
