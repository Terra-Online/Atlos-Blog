import { Feed } from 'feed';
import type { Item } from 'feed';
import { i18n } from '@/lib/i18n';
import { blogSource } from '@/lib/source';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blog.opendfieldmap.org'
).replace(/\/+$/, '');
const feedUrl = `${siteUrl}/rss.xml`;
const author = {
  name: 'Jacy Chan',
};

type RSSPage = ReturnType<typeof blogSource.getPages>[number];

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function toValidDate(date?: Date | string | number) {
  if (!date) return;

  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function getPageDate(page: RSSPage) {
  return (
    toValidDate((page.data as { date?: Date | string }).date) ??
    toValidDate(page.data.lastModified)
  );
}

function getStructuredText(value: unknown) {
  if (!value || typeof value !== 'object') return;

  const contents = (value as { contents?: unknown }).contents;
  if (typeof contents === 'string') return contents;
  if (Array.isArray(contents)) {
    return contents
      .map((item) => {
        if (typeof item === 'string') return item;
        if (!item || typeof item !== 'object') return;

        const content = (item as { content?: unknown }).content;
        return typeof content === 'string' ? content : undefined;
      })
      .filter((item): item is string => Boolean(item))
      .join('\n\n');
  }
}

function getRSSPages() {
  return i18n.languages
    .flatMap((language) =>
      blogSource.getPages(language).map((page) => ({
        page,
        date: getPageDate(page),
      })),
    )
    .filter((entry): entry is { page: RSSPage; date: Date } => Boolean(entry.date))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getRSS() {
  const entries = getRSSPages();
  const feed = new Feed({
    title: 'OEM Blog',
    description: 'Latest posts from Open Endfield Map.',
    id: `${siteUrl}/blogs`,
    link: `${siteUrl}/blogs`,
    feed: feedUrl,
    language: i18n.defaultLanguage,
    updated: entries[0]?.date,
    image: `${siteUrl}/icons/main.webp`,
    favicon: `${siteUrl}/icons/favicon.png`,
    copyright: 'All rights reserved 2026, Jacy Chan',
  });

  feed.addCategory('Open Endfield Map');

  for (const { page, date } of entries) {
    const url = toAbsoluteUrl(page.url);
    const data = page.data as typeof page.data & {
      cover?: string;
      section?: string;
    };
    const item: Item = {
      id: url,
      guid: url,
      title: page.data.title,
      description: page.data.description,
      content: getStructuredText(page.data.structuredData) ?? page.data.description,
      link: url,
      date,
      published: date,
      author: [author],
      category: [
        {
          name: data.section ?? page.slugs[0] ?? 'posts',
        },
        {
          name: page.locale ?? page.sourceLocale,
        },
      ],
    };

    if (data.cover) {
      item.image = toAbsoluteUrl(data.cover);
    }

    feed.addItem(item);
  }

  return feed.rss2();
}
