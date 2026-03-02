import type { ReactNode } from 'react';

const copy: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Sponsors',
    subtitle: 'Meet the individuals and organizations who make this project possible.',
  },
  'zh-cn': {
    title: '赞助者',
    subtitle: '感谢支持本项目的个人与组织。',
  },
  'zh-hk': {
    title: '贊助者',
    subtitle: '感謝支持本項目的個人與組織。',
  },
  ja: {
    title: 'スポンサー',
    subtitle: 'このプロジェクトを支えてくださる個人・組織のご紹介。',
  },
};

export default async function SponsorsPage({
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
