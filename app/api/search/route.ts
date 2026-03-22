import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
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

const search = createFromSource(source, undefined, {
  localeMap: {
    'zh-cn': { tokenizer: cjkTokenizer },
    'zh-hk': { tokenizer: cjkTokenizer },
    ja: { tokenizer: cjkTokenizer },
    ko: { tokenizer: cjkTokenizer },
  },
});

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

  const deduped = new Map<string, (typeof merged)[number][number]>();
  for (const list of merged) {
    for (const item of list) {
      const key = `${item.url}::${item.type}`;
      if (!deduped.has(key)) deduped.set(key, item);
    }
  }

  return Response.json(Array.from(deduped.values()));
}
