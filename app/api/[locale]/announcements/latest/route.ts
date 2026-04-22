import { NextResponse } from 'next/server';
import { i18n } from '@/lib/i18n';
import metaData from '../meta.json';

type LocaleMeta = {
  latestId: string | null;
};

type AnnouncementMeta = {
  version: string;
  locales: Record<string, LocaleMeta>;
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

    const latestId = ((metaData as AnnouncementMeta).locales?.[locale]?.latestId ?? null);
    const version = (metaData as AnnouncementMeta).version ?? '';

    return NextResponse.json(
      {
        locale,
        latestId,
        version,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      },
    );
  } catch (error) {
    console.error('Error reading announcement metadata:', error);
    return NextResponse.json(
      {
        error: 'Failed to load announcement metadata',
      },
      { status: 500 },
    );
  }
}
