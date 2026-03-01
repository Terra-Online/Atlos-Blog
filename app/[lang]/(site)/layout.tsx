import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { i18n, languageLabels } from '@/lib/i18n';
import { LangSetter } from '@/app/components/LangSetter';

export default async function SiteLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const withLocale = (path: string) => (lang === 'zh-hk' ? path : `/${lang}${path}`);
  const homeUrl = lang === 'zh-hk' ? '/' : `/${lang}/home`;

  if (!i18n.languages.includes(lang)) notFound();

  return (
    <I18nProvider
      locale={lang}
      locales={i18n.languages.map((l) => ({
        name: languageLabels[l] ?? l,
        locale: l,
      }))}
    >
      <LangSetter lang={lang} />
      <HomeLayout
        nav={{
          title: 'Open Endfield Map',
          url: homeUrl,
          transparentMode: 'top',
        }}
        links={[
          { text: 'Home', url: homeUrl, active: 'nested-url' },
          { text: 'Docs', url: withLocale('/docs/tos'), active: 'nested-url' },
          { text: 'Community', url: withLocale('/community/about-us'), active: 'nested-url' },
        ]}
        i18n
      >
        {children}
      </HomeLayout>
    </I18nProvider>
  );
}
