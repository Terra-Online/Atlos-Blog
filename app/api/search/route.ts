import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { type NextRequest } from 'next/server';

export const revalidate = false;

const search = createFromSource(source, undefined, {
  // Chinese and Japanese don't have Orama stemmers, fall back to English tokenizer
  localeMap: {
    'zh-cn': 'english',
    'zh-hk': 'english',
    ja: 'english',
  },
});

export function GET(request: NextRequest) {
  return search.GET(request);
}
