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

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{text.title}</h1>
      <p className="text-fd-muted-foreground">{text.subtitle}</p>
    </main>
  );
}
