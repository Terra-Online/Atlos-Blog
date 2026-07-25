import { communitySource } from '@/lib/source';
import { resolveContentLastModified } from '@/lib/git-authors';
import { RelativeTime } from '@/app/components/relative-time';
import Link from 'next/link';
import type { ReactNode } from 'react';
import '../blogs/blogs.scss';

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
  ko: {
    title: '커뮤니티',
    subtitle: '프로젝트와 참여 및 후원 방법을 알아보세요.',
  },
  ru: {
    title: 'Сообщество',
    subtitle: 'Узнайте о проекте, способах участия и поддержки.',
  },
};

type CommunityCard = {
  title: string;
  description?: string;
  lastModified?: string | Date;
  url: string;
};

function toTimestamp(date?: string | Date) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed.toISOString();
}

function CommunityCard({ card, locale }: { card: CommunityCard; locale: string }) {
  const timestamp = toTimestamp(card.lastModified);

  return (
    <Link href={card.url} className="blog-card blog-card-small">
      <h3>{card.title}</h3>
      {card.description ? <p>{card.description}</p> : null}
      {timestamp ? (
        <RelativeTime timestamp={timestamp} locale={locale} />
      ) : null}
    </Link>
  );
}

export default async function CommunityIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<ReactNode> {
  const { lang } = await params;
  const text = copy[lang] ?? copy.en;
  const cards = communitySource
    .getPages(lang)
    .map((page): CommunityCard => {
      const data = page.data as typeof page.data & {
        lastModified?: string | Date;
      };

      return {
        title: data.title,
        description: data.description,
        lastModified: resolveContentLastModified(
          `content/community/${page.file.path}`,
          data.lastModified,
        ) as string | Date | undefined,
        url: page.url,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="blog-index">
      <section className="blog-section">
        <h2>{text.title}</h2>
        <p className="blog-section-subtitle">{text.subtitle}</p>
        <div className="blog-grid">
          {cards.map((card) => (
            <CommunityCard key={card.url} card={card} locale={lang} />
          ))}
        </div>
      </section>
    </main>
  );
}
