import { ContentIndex } from '@/app/components/content-index';
import { communitySource } from '@/lib/source';
import type { ReactNode } from 'react';

const copy: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Community',
    subtitle: 'Learn about the project, how to join, and how to support us.',
  },
  'zh-cn': {
    title: '社区',
    subtitle: '了解项目、如何加入及如何支持我们。',
  },
  'zh-hk': {
    title: '社群',
    subtitle: '了解項目、如何加入及如何支持我們。',
  },
  ja: {
    title: 'コミュニティ',
    subtitle: 'プロジェクトの詳細、参加方法、サポート方法についてご覧ください。',
  },
};

export default async function CommunityIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<ReactNode> {
  const { lang } = await params;
  const text = copy[lang] ?? copy.en;
  const pages = communitySource
    .getPages(lang)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return <ContentIndex title={text.title} subtitle={text.subtitle} pages={pages} />;
}
