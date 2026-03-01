import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { NextRequest } from 'next/server';

export const revalidate = false;
export const dynamic = 'force-static';

const search = createFromSource(source, undefined, {
  localeMap: {
    'zh-cn': 'english',
    'zh-hk': 'english',
    ja: 'english',
  },
});

// With `output: 'export'` + `type: 'static'` on the client, fumadocs fetches
// this endpoint once at startup to download the full Orama index, then does
// all filtering locally in the browser. We call the handler with a plain
// request (no searchParams) so Next.js can pre-render it as a static file.
export function GET() {
  return search.GET(new NextRequest('http://localhost/api/search'));
}
