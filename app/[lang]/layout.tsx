import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { i18n, languageLabels } from '@/lib/i18n';
import { LangSetter } from '@/app/components/LangSetter';

export default async function LangDocsLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tree = (source.pageTree as any)[lang];
  if (!tree) notFound();

  return (
    <I18nProvider
      locale={lang}
      locales={i18n.languages.map((l) => ({
        name: languageLabels[l] ?? l,
        locale: l,
      }))}
    >
      {/* Updates html[lang] client-side so per-language CSS font stacks apply */}
      <LangSetter lang={lang} />
      <DocsLayout
        tree={tree}
        nav={{
          title: 'Open Endfield Map',
        }}
        i18n
      >
        {children}
      </DocsLayout>
    </I18nProvider>
  );
}

