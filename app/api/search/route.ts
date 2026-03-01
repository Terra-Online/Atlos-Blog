import { source } from '@/lib/source';
import { initAdvancedSearch } from 'fumadocs-core/search/server';

export const revalidate = false;
export const dynamic = 'force-static';

const localeMap = {
  en: 'english',
  'zh-cn': 'english',
  'zh-hk': 'english',
  ja: 'english',
} as const;

type StructuredData = {
  headings: { id: string; content: string }[];
  contents: { content: string; heading?: string }[];
};

function pageToIndex(page: {
  url: string;
  data: { title?: string; description?: string; structuredData?: StructuredData };
}) {
  if (!page.data.title || !page.data.structuredData) return null;

  return {
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: {
      headings: page.data.structuredData.headings,
      contents: page.data.structuredData.contents.map((entry) => ({
        content: entry.content,
        heading: entry.heading ?? '',
      })),
    },
  };
}

async function staticI18nExport() {
  const data = Object.fromEntries(
    await Promise.all(
      source.getLanguages().map(async ({ language, pages }) => {
        const indexes = pages.map(pageToIndex).filter((item) => item !== null);
        const searchHandler = initAdvancedSearch({
          indexes,
          language: localeMap[language as keyof typeof localeMap] ?? 'english',
        });

        return [language, await searchHandler.export()] as const;
      }),
    ),
  );

  return Response.json({ type: 'i18n', data });
}

// With `output: 'export'` + `type: 'static'` on the client, fumadocs fetches
// this endpoint once at startup to download the full Orama index, then does
// all filtering locally in the browser.
export function GET() {
  return staticI18nExport();
}
