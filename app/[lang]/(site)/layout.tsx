import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { i18n, languageLabels } from '@/lib/i18n';
import { LangSetter } from '@/app/components/LangSetter';
import { SiteNavbar } from './SiteNavbar';

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
          transparentMode: 'top',
          component: (
            <SiteNavbar
              homeUrl={homeUrl}
              docsUrl={withLocale('/docs/tos')}
              communityUrl={withLocale('/community/about-us')}
              showI18n
            />
          ),
        }}
        i18n
      >
        {children}
      </HomeLayout>
    </I18nProvider>
  );
}