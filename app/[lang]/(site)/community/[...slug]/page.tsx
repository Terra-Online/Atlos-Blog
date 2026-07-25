import { AuthorMeta } from '@/app/components/author-meta';
import { MdxImage } from '@/app/components/mdx-image';
import { MissingTranslation } from '@/app/components/missing-translation';
import {
  getGitAuthorsForContentPath,
  resolveContentLastModified,
} from '@/lib/git-authors';
import { communitySource } from '@/lib/source';
import { DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function CommunityPage(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = communitySource.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const contentPath = `content/community/${page.file.path}`;
  const gitAuthors = getGitAuthorsForContentPath(contentPath);
  const lastModified = resolveContentLastModified(contentPath, page.data.lastModified);

  return (
    <main className="site-article-shell">
      <article>
        <header className="site-article-header">
          <DocsTitle className="text-4xl blog-title">{page.data.title}</DocsTitle>
          <DocsDescription className="site-doc-description text-base">
            {page.data.description}
          </DocsDescription>
          {!page.missingTranslation ? (
            <AuthorMeta
              authors={gitAuthors}
              lastModified={lastModified}
              locale={params.lang}
            />
          ) : null}
        </header>
        {page.missingTranslation ? (
          <MissingTranslation />
        ) : (
          <DocsBody className="blog-post-body site-prose-body">
            <MDX
              components={{
                ...defaultMdxComponents,
                img: MdxImage,
              }}
            />
          </DocsBody>
        )}
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return communitySource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = communitySource.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
