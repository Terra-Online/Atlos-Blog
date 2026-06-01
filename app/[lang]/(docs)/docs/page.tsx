import { source } from '@/lib/source';
// This page acts as the /docs landing — it lives under (docs) so it inherits
// DocsLayout (sidebar + no top home-nav). A specific static segment wins over
// the [...slug] catch-all.

export default async function DocsIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pages = source.getPages(lang);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
      <p className="text-fd-muted-foreground">
        Browse the sidepanel to find documentation articles and policies.
      </p>
      <ul className="grid gap-2 text-sm text-fd-muted-foreground sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.url}>
            <a className="hover:text-fd-primary" href={page.url}>
              {page.data.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
