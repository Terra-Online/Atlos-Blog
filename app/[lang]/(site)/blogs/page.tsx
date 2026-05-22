import { blogSource } from '@/lib/source';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import './blogs.scss';

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

type BlogCard = {
  title: string;
  description?: string;
  date?: string | Date;
  url: string;
  section: string;
  card: 'small' | 'large';
  cover?: string;
};

function formatPostDate(date?: string | Date) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return format(parsed, 'EEE, d MMM yyyy');
}

function sectionTitle(section: string) {
  return section
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getCards(lang: string): BlogCard[] {
  return blogSource
    .getPages(lang)
    .map((page): BlogCard => {
      const data = page.data as typeof page.data & {
        date?: string | Date;
        section?: string;
        card?: string;
        cover?: string;
      };

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        url: page.url,
        section: data.section ?? page.slugs[0] ?? 'posts',
        card: data.card === 'large' ? 'large' : 'small',
        cover: data.cover,
      };
    })
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });
}

function SmallBlogCard({ card }: { card: BlogCard }) {
  return (
    <Link href={card.url} className="blog-card blog-card-small">
      <h3>{card.title}</h3>
      {card.description ? <p>{card.description}</p> : null}
      {formatPostDate(card.date) ? (
        <time dateTime={new Date(card.date as string | Date).toISOString()}>
          {formatPostDate(card.date)}
        </time>
      ) : null}
    </Link>
  );
}

function LargeBlogCard({ card }: { card: BlogCard }) {
  const date = formatPostDate(card.date);

  return (
    <Link href={card.url} className="blog-card blog-card-large">
      {card.cover ? (
        <Image
          src={card.cover}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      ) : (
        <div className="blog-card-large-fallback" aria-hidden />
      )}
      <div className="blog-card-large-overlay" />
      <div className="blog-card-large-content">
        <h3>{card.title}</h3>
        {date ? (
          <time dateTime={new Date(card.date as string | Date).toISOString()}>
            {date}
          </time>
        ) : null}
      </div>
    </Link>
  );
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const text = copy[lang] ?? copy.en;
  const cards = getCards(lang);
  const sections = Array.from(new Set(cards.map((card) => card.section)));

  return (
    <main className="blog-index mx-auto flex w-full max-w-[1120px] flex-col px-4 py-12 md:px-8">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">{text.title}</h1>
        <p className="mt-3 text-fd-muted-foreground">{text.subtitle}</p>
      </header>
      {sections.map((section) => {
        const sectionCards = cards.filter((card) => card.section === section);

        return (
          <section key={section} className="blog-section">
            <h2>{sectionTitle(section)}</h2>
            <div className="blog-grid">
              {sectionCards.map((card) =>
                card.card === 'large' ? (
                  <LargeBlogCard key={card.url} card={card} />
                ) : (
                  <SmallBlogCard key={card.url} card={card} />
                ),
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}
