import { NextResponse } from 'next/server';
import { i18n } from '@/lib/i18n';
import announcementData from './data.json';

export const dynamicParams = false;

const CACHE_CONTROL = 'public, max-age=0, s-maxage=31536000, stale-while-revalidate=604800';
const ANNOUNCEMENTS_LIMIT = 6;

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

function getDateTime(value: string): number {
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
}

function compareAnnouncementsByDateDesc(a: AnnouncementItem, b: AnnouncementItem): number {
  const aTime = getDateTime(a.date);
  const bTime = getDateTime(b.date);
  if (aTime !== bTime) return bTime - aTime;

  return a.id.localeCompare(b.id);
}

export function generateStaticParams() {
  return i18n.languages.map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  try {
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

    const announcements = ((announcementData as Record<string, AnnouncementItem[]>)[locale] ?? [])
      .map((item) => ({
        ...item,
        locale,
      }))
      .sort(compareAnnouncementsByDateDesc)
      .slice(0, ANNOUNCEMENTS_LIMIT);

    return NextResponse.json(announcements, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Cache-Control': CACHE_CONTROL,
      },
    });
  } catch (error) {
    console.error('Error reading announcements:', error);
    return NextResponse.json(
      {
        error: 'Failed to load announcements',
      },
      { status: 500 },
    );
  }
}
