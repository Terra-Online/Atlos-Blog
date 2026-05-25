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
import { AuthorMeta } from '@/app/components/author-meta';
import { MdxImage } from '@/app/components/mdx-image';
import {
  getGitAuthorsForContentPath,
  resolveContentLastModified,
} from '@/lib/git-authors';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const contentPath = `content/docs/${page.file.path}`;
  const gitAuthors = getGitAuthorsForContentPath(contentPath);
  const lastModified = resolveContentLastModified(contentPath, page.data.lastModified);
  const lastModifiedDate = lastModified ? new Date(lastModified) : null;
  const hasValidLastModified = !!lastModifiedDate && !Number.isNaN(lastModifiedDate.getTime());

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: 'clerk' }}
      lastUpdate={hasValidLastModified ? lastModifiedDate : undefined}
      full={page.data.full}
    >
      <DocsTitle className="mb-3">{page.data.title}</DocsTitle>
      <DocsDescription className="mb-3">{page.data.description}</DocsDescription>
      <AuthorMeta authors={gitAuthors} lastModified={lastModified} />
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            img: MdxImage,
          }}
        />
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
