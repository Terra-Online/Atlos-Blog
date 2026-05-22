import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { TableOfContents } from 'fumadocs-core/server';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { ComponentType } from 'react';

type SiteDocPageData = {
  title: string;
  description?: string;
  toc?: TableOfContents;
  full?: boolean;
  body: ComponentType<any>;
};

export function SiteDocPage({ page }: { page: { data: SiteDocPageData } }) {
  const MDX = page.data.body;

  return (
    <main className="mx-auto w-full max-w-[860px] px-4 py-12 md:px-8">
      <article>
        <header className="mb-8 border-b border-fd-border pb-6">
          <DocsTitle className="mb-3 text-4xl">{page.data.title}</DocsTitle>
          <DocsDescription className="text-base">
            {page.data.description}
          </DocsDescription>
        </header>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              img: (props: any) => <ImageZoom {...props} />,
            }}
          />
        </DocsBody>
      </article>
    </main>
  );
}
