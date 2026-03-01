import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { type Metadata } from 'next';

interface GitAuthor {
  name: string;
  email: string;
}

/** Derive a probable GitHub username from the git email. */
function githubUsername(email: string): string | null {
  // GitHub noreply: <id>+<username>@users.noreply.github.com
  const noreply = email.match(/^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/i);
  if (noreply) return noreply[1];
  return null;
}

function AuthorChip({ author }: { author: GitAuthor }) {
  const username = githubUsername(author.email);
  const href = username ? `https://github.com/${username}` : undefined;
  const avatarSrc = username
    ? `https://github.com/${username}.png?size=96`
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

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gitAuthors = (page.data as any).gitAuthors as GitAuthor[] | undefined;
  const lastModified = page.data.lastModified;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: 'clerk' }}
      lastUpdate={lastModified}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-3">{page.data.description}</DocsDescription>
      {(gitAuthors && gitAuthors.length > 0) || lastModified ? (
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-fd-border pb-4 text-xs text-fd-muted-foreground">
          {gitAuthors && gitAuthors.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 opacity-70">Author(s):</span>
              {gitAuthors.map((a) => (
                <AuthorChip key={a.email} author={a} />
              ))}
            </div>
          )}
        </div>
      ) : null}
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
