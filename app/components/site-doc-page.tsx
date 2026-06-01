import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { TableOfContents } from 'fumadocs-core/server';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { ComponentType, ReactNode } from 'react';
import { AuthorMeta, type GitAuthor } from '@/app/components/author-meta';
import { MdxImage } from '@/app/components/mdx-image';
import {
  getGitAuthorsForContentPath,
  resolveContentLastModified,
} from '@/lib/git-authors';
import { MissingTranslation } from '@/app/components/missing-translation';

type SiteDocPageData = {
  title: string;
  description?: string;
  toc?: TableOfContents;
  full?: boolean;
  lastModified?: Date | string | number;
  gitAuthors?: GitAuthor[];
  load?: () => Promise<{
    body: ComponentType<any>;
    lastModified?: Date | string | number;
  }>;
  body?: ComponentType<any>;
};

export async function SiteDocPage({
  page,
  contentPath,
  showAuthorMeta = false,
  missingTranslation = false,
}: {
  page: { data: SiteDocPageData };
  contentPath?: string;
  showAuthorMeta?: boolean;
  missingTranslation?: boolean;
}) {
  const loaded = !missingTranslation && page.data.load ? await page.data.load() : undefined;
  const MDX = loaded?.body ?? page.data.body;
  let body: ReactNode;

  if (missingTranslation) {
    body = <MissingTranslation />;
  } else {
    const Content = MDX;
    if (!Content) return null;

    body = (
      <DocsBody>
        <Content
          components={{
            ...defaultMdxComponents,
            img: MdxImage,
          }}
        />
      </DocsBody>
    );
  }

  const authors = contentPath
    ? getGitAuthorsForContentPath(contentPath)
    : page.data.gitAuthors;
  const lastModified =
    contentPath
      ? resolveContentLastModified(contentPath, loaded?.lastModified ?? page.data.lastModified)
      : page.data.lastModified;

  return (
    <main className="mx-auto w-full max-w-[860px] px-4 py-12 md:px-8">
      <article>
        <header className="mb-8">
          <DocsTitle className="mb-3 text-4xl">{page.data.title}</DocsTitle>
          <DocsDescription className="mb-3 text-base">
            {page.data.description}
          </DocsDescription>
          {showAuthorMeta && !missingTranslation ? (
            <AuthorMeta
              authors={authors}
              lastModified={lastModified}
            />
          ) : (
            <div className="border-b border-fd-border pb-6" />
          )}
        </header>
        {body}
      </article>
    </main>
  );
}
