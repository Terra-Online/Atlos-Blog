import { ContentIndex } from '@/app/components/content-index';
import { sponsorsSource } from '@/lib/source';
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
  ko: {
    title: '후원자',
    subtitle: '이 프로젝트를 가능하게 하는 개인과 단체를 소개합니다.',
  },
  ru: {
    title: 'Спонсоры',
    subtitle: 'Люди и организации, благодаря которым существует этот проект.',
  },
};

export default async function SponsorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<ReactNode> {
  const { lang } = await params;
  const text = copy[lang] ?? copy.en;
  const pages = sponsorsSource
    .getPages(lang)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return <ContentIndex title={text.title} subtitle={text.subtitle} pages={pages} />;
}
