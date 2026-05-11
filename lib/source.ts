import { i18n, sectionLabels } from './i18n';
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

const folderSectionMap = {
  blogs: 'blog',
  community: 'community',
  docs: 'docs',
  more: 'more',
} as const;

function localizedSectionName(folderName: string, locale: string) {
  const section = folderSectionMap[folderName as keyof typeof folderSectionMap];
  if (!section) return undefined;

  const labels = sectionLabels[section];
  if (!labels) return undefined;

  return labels[locale as keyof typeof labels] ?? labels.en;
}

export const source = loader({
  i18n,
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFolder(node, folder) {
      const name = localizedSectionName(folder.file.name, folder.file.locale ?? i18n.defaultLanguage);
      return name ? { ...node, name } : node;
    },
  },
});
