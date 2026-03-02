'use client';

import { type ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

type LocaleItem = {
  name: string;
  locale: string;
};

export function AppI18nProvider({
  locale,
  locales,
  children,
}: {
  locale: string;
  locales: LocaleItem[];
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = useCallback(
    (nextLocale: string) => {
      const allLocales = new Set(i18n.languages);
      const segments = pathname.split('/').filter((v) => v.length > 0);
      const hasLocalePrefix = segments[0] ? allLocales.has(segments[0]) : false;
      const baseSegments = hasLocalePrefix ? segments.slice(1) : segments;
      const normalizedBase = baseSegments.length === 0 ? ['home'] : baseSegments;

      let nextPath: string;
      if (nextLocale === i18n.defaultLanguage) {
        nextPath =
          normalizedBase.length === 1 && normalizedBase[0] === 'home'
            ? '/'
            : `/${normalizedBase.join('/')}`;
      } else {
        nextPath = `/${nextLocale}/${normalizedBase.join('/')}`;
      }

      router.push(nextPath);
      router.refresh();
    },
    [pathname, router],
  );

  return (
    <I18nProvider locale={locale} locales={locales} onChange={onChange}>
      {children}
    </I18nProvider>
  );
}
