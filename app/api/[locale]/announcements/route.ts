import { NextResponse } from 'next/server';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';

type AnnouncementItem = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  url: string;
  locale: string;
};

function isLocaleSupported(locale: string): boolean {
  return i18n.languages.includes(locale);
}

function isAnnouncementUrl(url: string, locale: string): boolean {
  return url.startsWith(`/${locale}/blogs/announcements/`);
}

function inferIdFromUrl(url: string): string {
  const clean = url.replace(/\/+$/, '');
  return clean.slice(clean.lastIndexOf('/') + 1);
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;

  if (!isLocaleSupported(locale)) {
    return NextResponse.json(
      {
        error: 'Unsupported locale',
        supportedLocales: i18n.languages,
      },
      { status: 400 },
    );
  }

  const announcementSlugs = source
    .getPages()
    .filter((page) => isAnnouncementUrl(page.url, i18n.defaultLanguage))
    .map((page) => inferIdFromUrl(page.url));

  const announcements: AnnouncementItem[] = announcementSlugs
    .map((slug) => {
      const page = source.getPage(['blogs', 'announcements', slug], locale);
      if (!page) return null;

      const data = page.data as {
        title?: string;
        description?: string;
        date?: string;
        lastModified?: string | Date;
        content?: string;
      };

      const fallbackDate = data.date
        ?? (data.lastModified ? new Date(data.lastModified).toISOString().slice(0, 10) : '');

      return {
        id: slug,
        title: data.title ?? '',
        description: data.description ?? '',
        content: data.content ?? data.description ?? '',
        date: fallbackDate,
        url: page.url,
        locale,
      };
    })
    .filter((item): item is AnnouncementItem => item !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json(announcements, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  });
}
