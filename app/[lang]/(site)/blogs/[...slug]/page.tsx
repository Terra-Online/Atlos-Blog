import { blogSource } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthorMeta } from '@/app/components/author-meta';
import { MdxImage } from '@/app/components/mdx-image';
import {
  getGitAuthorsForContentPath,
  resolveContentLastModified,
} from '@/lib/git-authors';
import { MissingTranslation } from '@/app/components/missing-translation';

function formatPostDate(date?: string | Date) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return format(parsed, 'EEE, d MMM yyyy');
}

export default async function BlogPostPage(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const date = formatPostDate((page.data as { date?: string | Date }).date);
  const contentPath = `content/blogs/${page.file.path}`;
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
          {date ? (
            <p className="text-sm font-medium text-fd-primary">{date}</p>
          ) : null}
          {!page.missingTranslation ? (
            <AuthorMeta authors={gitAuthors} lastModified={lastModified} />
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
  return blogSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
