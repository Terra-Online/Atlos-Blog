import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkGitAuthors } from './lib/remark-git-authors.mjs';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    remarkPlugins: [remarkGitAuthors],
    valueToExport: ['gitAuthors'],
  },
});
