import path from 'node:path';
import snapshot from '../git-authors-snapshot.json';

export interface GitAuthor {
  name: string;
  email: string;
}

export type LastModifiedInput = Date | string | number | undefined;

type SnapshotEntry = {
  authors: GitAuthor[];
  lastModified?: string;
};

type Snapshot = Record<string, SnapshotEntry>;

const gitAuthorsSnapshot = snapshot as Snapshot;
const authorCache = new Map<string, GitAuthor[]>();
const lastModifiedCache = new Map<string, Date | undefined>();

function toContentPath(filePath: string) {
  if (!path.isAbsolute(filePath)) {
    return filePath.split(path.sep).join('/');
  }

  return path.relative(process.cwd(), filePath).split(path.sep).join('/');
}

function legacyPaths(filePath: string) {
  const paths = [filePath];
  const extensionSwap = filePath.endsWith('.mdx')
    ? filePath.replace(/\.mdx$/, '.md')
    : filePath.endsWith('.md')
      ? filePath.replace(/\.md$/, '.mdx')
      : undefined;

  if (extensionSwap) {
    paths.push(extensionSwap);
  }

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

function readSnapshot(filePath: string) {
  for (const candidate of legacyPaths(toContentPath(filePath))) {
    const entry = gitAuthorsSnapshot[candidate];
    if (entry) return entry;
  }

  return undefined;
}

export function getGitAuthorsForContentPath(filePath: string): GitAuthor[] {
  if (authorCache.has(filePath)) return authorCache.get(filePath)!;

  const authors = readSnapshot(filePath)?.authors ?? [];
  authorCache.set(filePath, authors);
  return authors;
}

export function getGitLastModifiedForContentPath(filePath: string): Date | undefined {
  if (lastModifiedCache.has(filePath)) return lastModifiedCache.get(filePath);

  const raw = readSnapshot(filePath)?.lastModified;
  const date = raw ? new Date(raw) : undefined;
  const lastModified = date && !Number.isNaN(date.getTime()) ? date : undefined;

  lastModifiedCache.set(filePath, lastModified);
  return lastModified;
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
