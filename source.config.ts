import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkGitAuthors } from './lib/remark-git-authors.mjs';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blogs = defineDocs({
  dir: 'content/blogs',
});

export const community = defineDocs({
  dir: 'content/community',
});

export const sponsors = defineDocs({
  dir: 'content/sponsors',
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    remarkPlugins: [remarkGitAuthors],
    valueToExport: ['gitAuthors'],
  },
});
