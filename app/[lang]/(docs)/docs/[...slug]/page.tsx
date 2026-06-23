import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
  PageLastUpdate,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { type Metadata } from 'next';
import { AuthorMeta } from '@/app/components/author-meta';
import { MdxImage } from '@/app/components/mdx-image';
import {
  getGitAuthorsForContentPath,
  resolveContentLastModified,
} from '@/lib/git-authors';
import { MissingTranslation } from '@/app/components/missing-translation';

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
      toc={page.missingTranslation ? [] : page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="site-doc-description">
        {page.data.description}
      </DocsDescription>
      {page.missingTranslation ? (
        <MissingTranslation />
      ) : (
        <>
          <AuthorMeta authors={gitAuthors} lastModified={lastModified} />
          <DocsBody className="site-docs-body site-prose-body">
            <MDX
              components={{
                ...defaultMdxComponents,
                img: MdxImage,
              }}
            />
          </DocsBody>
          {hasValidLastModified ? (
            <PageLastUpdate date={lastModifiedDate} />
          ) : null}
        </>
      )}
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
