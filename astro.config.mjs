// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.opendfieldmap.org',
  integrations: [
    starlight({
      title: 'Open Endfield Map Docs',
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Terms of Service',
          link: '/tos/',
        },
        {
          label: 'Privacy Policy',
          link: '/privacy/',
        },
        {
          label: 'Partners & Friends',
          link: '/friends/',
        },
      ],
    }),
  ],
  output: 'static',
});
