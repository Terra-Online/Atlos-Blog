const copy = {
  en: {
    title: 'Get Started',
    body: 'This is a standalone sub page with the same headbar from HomeLayout.',
  },
  'zh-cn': {
    title: '快速开始',
    body: '这是一个独立分页面，并复用 HomeLayout 的头部导航。',
  },
  'zh-hk': {
    title: '快速開始',
    body: '這是一個獨立分頁面，並重用 HomeLayout 的頂部導覽。',
  },
  ja: {
    title: 'はじめに',
    body: 'これは独立したサブページで、HomeLayout のヘッダーバーを共有します。',
  },
} as const;

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const text = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{text.title}</h1>
      <p className="mt-3 text-fd-muted-foreground">{text.body}</p>
    </main>
  );
}
