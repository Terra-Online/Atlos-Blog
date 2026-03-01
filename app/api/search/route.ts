import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { type NextRequest } from 'next/server';

const search = createFromSource(source, undefined, {
  localeMap: {
    'zh-cn': 'english',
    'zh-hk': 'english',
    ja: 'english',
  },
});

export function GET(request: NextRequest) {
  return search.GET(request);
}
