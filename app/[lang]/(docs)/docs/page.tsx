import type { ReactNode } from 'react';

// This page acts as the /docs landing — it lives under (docs) so it inherits
// DocsLayout (sidebar + no top home-nav). A specific static segment wins over
// the [[...slug]] catch-all.

export default function DocsIndexPage(): ReactNode {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
      <p className="text-fd-muted-foreground">
        Browse the sidepanel to find articles, guides, policies, and more.
      </p>
    </main>
  );
}
