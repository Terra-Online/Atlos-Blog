import { Feed } from 'feed';
import { source } from '@/lib/source';

const baseUrl = 'https://blog.opendfieldmap.org/';

export function getRSS() {
  const feed = new Feed({
    title: 'OEM Blog',
    id: `${baseUrl}/blog`,
    link: `${baseUrl}/blog`,
    language: 'zh-hk',

    image: `${baseUrl}/banner.png`,
    favicon: `${baseUrl}/icon.png`,
    copyright: 'All rights reserved 2026, Jacy Chan',
  });

  for (const page of source.getPages()) {
    const fallbackDate = page.data.lastModified
      ? new Date(page.data.lastModified)
      : new Date();

    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: fallbackDate,

      author: [
        {
          name: 'Jacy Chan',
        },
      ],
    });
  }

  return feed.rss2();
}