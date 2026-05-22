import { i18n, sectionLabels } from './i18n';
import { blogs, community, docs, sponsors } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  i18n,
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const blogSource = loader({
  i18n,
  baseUrl: '/blogs',
  source: blogs.toFumadocsSource(),
});

export const communitySource = loader({
  i18n,
  baseUrl: '/community',
  source: community.toFumadocsSource(),
});

export const sponsorsSource = loader({
  i18n,
  baseUrl: '/sponsors',
  source: sponsors.toFumadocsSource(),
});

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
