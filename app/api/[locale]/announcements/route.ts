import { NextResponse } from 'next/server';
import { i18n } from '@/lib/i18n';
import announcementData from './data.json';

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
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(announcements, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
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
