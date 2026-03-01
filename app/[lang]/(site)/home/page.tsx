import Link from 'next/link';

const copy = {
  en: {
    title: 'Open Endfield Map Hub',
    subtitle: 'Project center page independent from docs routes.',
    ctaDocs: 'Open Documentation',
    ctaSub: 'Go to Sub Page',
  },
  'zh-cn': {
    title: 'Open Endfield Map 中心页',
    subtitle: '这是独立于文档路由的中心页面。',
    ctaDocs: '进入文档',
    ctaSub: '进入分页面',
  },
  'zh-hk': {
    title: 'Open Endfield Map 中心頁',
    subtitle: '這是獨立於文件路由的中心頁面。',
    ctaDocs: '進入文件',
    ctaSub: '進入分頁面',
  },
  ja: {
    title: 'Open Endfield Map ハブ',
    subtitle: 'ドキュメントルートから独立した中心ページです。',
    ctaDocs: 'ドキュメントへ',
    ctaSub: 'サブページへ',
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const withLocale = (path: string) => (lang === 'zh-hk' ? path : `/${lang}${path}`);
  const text = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{text.title}</h1>
      <p className="text-fd-muted-foreground">{text.subtitle}</p>

      <div className="flex flex-wrap gap-3">
        <Link
          href={withLocale('/docs/tos')}
          className="rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
        >
          {text.ctaDocs}
        </Link>
        <Link
          href={withLocale('/home/get-started')}
          className="rounded-md border border-fd-border px-4 py-2 text-sm font-medium text-fd-foreground"
        >
          {text.ctaSub}
        </Link>
      </div>
    </main>
  );
}
