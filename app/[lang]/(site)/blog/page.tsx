import type { ReactNode } from 'react';

const copy: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Blog',
    subtitle: 'Development articles, operation reports, and project updates.',
  },
  'zh-cn': {
    title: '博客',
    subtitle: '开发文章、运营报告与项目动态。',
  },
  'zh-hk': {
    title: '部落格',
    subtitle: '開發文章、運營報告與項目動態。',
  },
  ja: {
    title: 'ブログ',
    subtitle: '開発記事・運営報告・プロジェクトの最新情報。',
  },
  ko: {
    title: '블로그',
    subtitle: '개발 아티클, 운영 리포트, 프로젝트 업데이트.',
  },
};

export default async function BlogIndexPage({
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
