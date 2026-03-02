import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { i18n, languageLabels } from '@/lib/i18n';
import { LangSetter } from '@/app/components/LangSetter';
import { siteBaseOptions } from '@/app/components/shared';
import { AppI18nProvider } from '@/app/components/AppI18nProvider';

export default async function SiteLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  if (!i18n.languages.includes(lang)) notFound();

  return (
    <AppI18nProvider
      locale={lang}
      locales={i18n.languages.map((l) => ({
        name: languageLabels[l] ?? l,
        locale: l,
      }))}
    >
      <LangSetter lang={lang} />
      <HomeLayout {...siteBaseOptions(lang)} i18n>
        {children}
      </HomeLayout>
    </AppI18nProvider>
  );
}
