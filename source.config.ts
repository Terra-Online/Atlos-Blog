import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { pageSchema } from 'fumadocs-core/source/schema';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blogs = defineDocs({
  dir: 'content/blogs',
  docs: {
    schema: pageSchema.passthrough(),
  },
});

export const community = defineDocs({
  dir: 'content/community',
});

export const sponsors = defineDocs({
  dir: 'content/sponsors',
});

export default defineConfig();
