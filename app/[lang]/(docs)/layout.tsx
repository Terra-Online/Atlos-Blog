import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { i18n, languageLabels } from '@/lib/i18n';
import { LangSetter } from '@/app/components/LangSetter';
import { AppI18nProvider } from '@/app/components/AppI18nProvider';
import { sectionLabels } from '@/lib/i18n';

function localizedSectionLabel(section: keyof typeof sectionLabels, lang: string) {
  return sectionLabels[section][lang as keyof (typeof sectionLabels)[typeof section]] ?? sectionLabels[section].en;
}

export default async function LangDocsLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const tree = source.getPageTree(lang);
  if (!tree) notFound();

  tree.name = localizedSectionLabel('docs', lang);
  for (const child of tree.children) {
    if (child.type !== 'folder') continue;
    if (child.name === 'community') child.name = localizedSectionLabel('community', lang);
    if (child.name === 'blogs') child.name = localizedSectionLabel('blog', lang);
    if (child.name === 'more') child.name = localizedSectionLabel('more', lang);
  }

  return (
    <AppI18nProvider
      locale={lang}
      locales={i18n.languages.map((l) => ({
        name: languageLabels[l] ?? l,
        locale: l,
      }))}
    >
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
    </AppI18nProvider>
  );
}
