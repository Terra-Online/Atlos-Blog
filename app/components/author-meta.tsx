import { formatDistanceToNow } from 'date-fns';
import type { GitAuthor } from '@/lib/git-authors';

export type { GitAuthor };

interface GitHubIdentity {
  username: string;
  userId?: string;
}

function githubIdentity(email: string): GitHubIdentity | null {
  const normalized = email
    .trim()
    .replace(/^<|>$/g, '')
    .replace(/^mailto:/i, '')
    .toLowerCase();

  const noreply = normalized.match(
    /^(?:(\d+)\+)?([a-z0-9-]+(?:\[bot\])?)@users\.noreply\.github\.com$/i,
  );
  if (noreply) {
    return {
      userId: noreply[1] || undefined,
      username: noreply[2],
    };
  }

  const extracted = normalized.match(
    /([a-z0-9._%+-]+@users\.noreply\.github\.com)/i,
  );
  if (extracted) {
    const retry = extracted[1].match(
      /^(?:(\d+)\+)?([a-z0-9-]+(?:\[bot\])?)@users\.noreply\.github\.com$/i,
    );
    if (retry) {
      return {
        userId: retry[1] || undefined,
        username: retry[2],
      };
    }
  }

  return null;
}

function githubIdentityFromName(name: string): GitHubIdentity | null {
  const username = name.trim();

  if (!/^[a-z0-9](?:[a-z0-9-]{0,37}[a-z0-9])?$/i.test(username)) {
    return null;
  }

  return { username };
}

function AuthorChip({ author }: { author: GitAuthor }) {
  const identity = githubIdentity(author.email) ?? githubIdentityFromName(author.name);
  const href = identity ? `https://github.com/${identity.username}` : undefined;
  const avatarSrc = identity?.userId
    ? `https://avatars.githubusercontent.com/u/${identity.userId}?v=4&s=96`
    : identity?.username
      ? `https://github.com/${identity.username}.png?size=96`
      : 'https://github.com/ghost.png?size=96';

  const inner = (
    <span className="inline-flex items-center gap-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarSrc}
        alt={author.name}
        width={20}
        height={20}
        className="rounded-full"
        loading="lazy"
      />
      <span>{author.name}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1 rounded-md border border-fd-border bg-fd-card px-2 py-0.5 text-xs text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        {inner}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-fd-border bg-fd-card px-2 py-0.5 text-xs text-fd-muted-foreground">
      {inner}
    </span>
  );
}

export function AuthorMeta({
  authors,
  lastModified,
  className = 'site-author-meta border-b border-fd-border',
}: {
  authors?: GitAuthor[];
  lastModified?: Date | string | number;
  className?: string;
}) {
  const lastModifiedDate = lastModified ? new Date(lastModified) : null;
  const hasValidLastModified =
    !!lastModifiedDate && !Number.isNaN(lastModifiedDate.getTime());
  const lastModifiedAgo = hasValidLastModified
    ? formatDistanceToNow(lastModifiedDate, { addSuffix: true })
    : null;

  if ((!authors || authors.length === 0) && !lastModifiedAgo) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 gap-1 text-xs text-fd-muted-foreground ${className}`}
    >
      {authors && authors.length > 0 ? (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 opacity-70">By</span>
          {authors.map((author) => (
            <AuthorChip key={author.email} author={author} />
          ))}
        </div>
      ) : null}
      {lastModifiedAgo ? <span>{lastModifiedAgo}.</span> : null}
    </div>
  );
}
