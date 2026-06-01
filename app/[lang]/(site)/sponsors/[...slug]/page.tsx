import { SiteDocPage } from '@/app/components/site-doc-page';
import { sponsorsSource } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function SponsorsPage(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = sponsorsSource.getPage(params.slug, params.lang);
  if (!page) notFound();

  return (
    <SiteDocPage
      page={page}
      missingTranslation={page.missingTranslation}
    />
  );
}

export function generateStaticParams() {
  return sponsorsSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = sponsorsSource.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
