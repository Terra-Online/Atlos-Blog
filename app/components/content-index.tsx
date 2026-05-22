import { format } from 'date-fns';
import Link from 'next/link';
import type { ReactNode } from 'react';

type PageLike = {
  url: string;
  slugs: string[];
  data: {
    title: string;
    description?: string;
    lastModified?: Date;
  };
};

function formatDate(date?: string | Date) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;

  return format(parsed, 'EEE, d MMM yyyy');
}

export function ContentIndex({
  title,
  subtitle,
  pages,
}: {
  title: string;
  subtitle: string;
  pages: PageLike[];
}): ReactNode {
  return (
    <main className="mx-auto flex w-full max-w-[980px] flex-col gap-8 px-4 py-12 md:px-8">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-fd-muted-foreground">{subtitle}</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((page) => {
          const date = formatDate(page.data.lastModified);

          return (
            <Link
              key={page.url}
              href={page.url}
              className="rounded-xl border border-fd-border bg-fd-card p-5 shadow-sm transition hover:border-fd-primary/50 hover:shadow-md"
            >
              <h2 className="text-xl font-bold tracking-tight">{page.data.title}</h2>
              {page.data.description ? (
                <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                  {page.data.description}
                </p>
              ) : null}
              {date ? (
                <time className="mt-4 block text-sm font-medium text-fd-primary">
                  {date}
                </time>
              ) : null}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
