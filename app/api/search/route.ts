import { blogSource, communitySource, source, sponsorsSource } from '@/lib/source';
import { createI18nSearchAPI, type AdvancedIndex } from 'fumadocs-core/search/server';
import { type NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n';

const cjkTokenizer = {
  language: 'english',
  normalizationCache: new Map<string, string>(),
  tokenize(raw: string) {
    const normalized = raw.trim().toLowerCase();
    if (!normalized) return [];

    const segments = normalized.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+|[\p{L}\p{N}_-]+/gu) ?? [];
    const tokens: string[] = [];

    for (const segment of segments) {
      if (/^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+$/u.test(segment)) {
        const chars = Array.from(segment);
        tokens.push(...chars);

        for (let i = 0; i < chars.length - 1; i++) {
          tokens.push(chars[i] + chars[i + 1]);
        }
      } else {
        tokens.push(segment);
      }
    }

    return tokens;
  },
};

const searchOptions = {
  localeMap: {
    'zh-cn': { tokenizer: cjkTokenizer },
    'zh-hk': { tokenizer: cjkTokenizer },
    ja: { tokenizer: cjkTokenizer },
    ko: { tokenizer: cjkTokenizer },
  },
};

const sources = [source, blogSource, communitySource, sponsorsSource];

function pageToIndex(
  page: ReturnType<(typeof sources)[number]['getPages']>[number],
): AdvancedIndex {
  return {
    title: page.data.title,
    description:
      'description' in page.data ? page.data.description : undefined,
    url: page.url,
    id: `${page.url}::${page.file.path}`,
    structuredData: page.data.structuredData,
  };
}

const search = createI18nSearchAPI('advanced', {
  ...searchOptions,
  i18n,
  indexes: buildSearchIndexes(),
});

function buildSearchIndexes() {
  const indexes = new Map<string, AdvancedIndex & { locale: string }>();

  for (const locale of i18n.languages) {
    for (const source of sources) {
      for (const page of source.getPages(locale)) {
        const index = pageToIndex(page);
        indexes.set(`${locale}::${index.url}`, {
          ...index,
          locale,
        });
      }
    }
  }

  return Array.from(indexes.values());
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query');
  if (!query) return Response.json([]);

  const locale = request.nextUrl.searchParams.get('locale') ?? undefined;
  const tag = request.nextUrl.searchParams.get('tag') ?? undefined;

  if (locale) {
    return Response.json(await search.search(query, { locale, tag }));
  }

  const merged = await Promise.all(
    i18n.languages.map((l) => search.search(query, { locale: l, tag })),
  );

  return Response.json(dedupeResults(merged));
}

function dedupeResults(
  merged: Awaited<ReturnType<typeof search.search>>[],
) {
  const deduped = new Map<string, (typeof merged)[number][number]>();
  for (const list of merged) {
    for (const item of list) {
      const key = `${item.url}::${item.type}`;
      if (!deduped.has(key)) deduped.set(key, item);
    }
  }

  return Array.from(deduped.values());
}
