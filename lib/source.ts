import { sectionLabels } from './i18n';
import { blogs, community, docs, sponsors } from '@/.source/server';
import { createLocalizedContentSource } from './localized-content-source';

export const source = createLocalizedContentSource(docs, '/docs');

export const blogSource = createLocalizedContentSource(blogs, '/blogs');

export const communitySource = createLocalizedContentSource(community, '/community');

export const sponsorsSource = createLocalizedContentSource(sponsors, '/sponsors');

export const siteSections = [
  {
    key: 'docs',
    href: '/docs',
    source,
  },
  {
    key: 'blog',
    href: '/blogs',
    source: blogSource,
  },
  {
    key: 'community',
    href: '/community',
    source: communitySource,
  },
  {
    key: 'sponsors',
    href: '/sponsors',
    source: sponsorsSource,
  },
] as const satisfies ReadonlyArray<{
  key: keyof typeof sectionLabels;
  href: string;
  source: typeof source;
}>;
