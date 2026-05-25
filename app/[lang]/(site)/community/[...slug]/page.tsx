import { SiteDocPage } from '@/app/components/site-doc-page';
import { communitySource } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function CommunityPage(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = communitySource.getPage(params.slug, params.lang);
  if (!page) notFound();

  return (
    <SiteDocPage
      page={page}
      contentPath={`content/community/${page.file.path}`}
      showAuthorMeta
    />
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
