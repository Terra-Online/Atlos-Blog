import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
    schema: docsSchema({
      extend: z.object({
        /** ISO 8601 timestamp injected by remark-git-meta at build time */
        gitLastUpdated: z.string().optional(),
        /** Array of Git author display-names injected by remark-git-meta */
        gitAuthors: z.array(z.string()).optional(),
      }),
    }),
  }),
};
