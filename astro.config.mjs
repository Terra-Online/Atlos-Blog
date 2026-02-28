// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import { remarkHeadingNumbering } from './src/plugins/remark-heading-numbering.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.opendfieldmap.org',
  integrations: [
    icon({
      include: {
        lucide: ['*'],
      },
    }),
    starlight({
      title: 'Open Endfield Map',
      lastUpdated: true,
      head: [
        // ── Favicon light (default) ──────────────────────────────────────────
        { tag: 'link', attrs: { rel: 'icon', sizes: '32x32', type: 'image/x-icon', href: '/icons/favicon.ico' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' } },
        // ── Favicon dark (prefers-color-scheme: dark) ────────────────────────
        { tag: 'link', attrs: { rel: 'icon', sizes: '32x32', type: 'image/x-icon', href: '/icons/favicon_dark.ico',        media: '(prefers-color-scheme: dark)' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml',               href: '/icons/favicon_dark.svg',        media: '(prefers-color-scheme: dark)' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '96x96',   href: '/icons/favicon-96x96_dark.png',  media: '(prefers-color-scheme: dark)' } },
        // ── Apple touch icon ─────────────────────────────────────────────────
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon_dark.png', media: '(prefers-color-scheme: dark)' } },
      ],
      locales: {
        en:      { label: 'English',    lang: 'en' },
        'zh-cn': { label: '简体中文',   lang: 'zh-CN' },
        'zh-hk': { label: '繁體中文',   lang: 'zh-HK' },
        ja:      { label: '日本語',     lang: 'ja' },
      },
      defaultLocale: 'en',
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/LeftBar.astro',
        PageSidebar: './src/components/RightBar.astro',
      },
      sidebar: [
        {
          label: 'Docs',
          translations: { 'zh-CN': '文档', 'zh-HK': '文件', ja: 'ドキュメント' },
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Community',
          translations: { 'zh-CN': '社区', 'zh-HK': '社群', ja: 'コミュニティ' },
          autogenerate: { directory: 'community' },
        },
        {
          label: 'Blogs',
          translations: { 'zh-CN': '博客', 'zh-HK': '部落格', ja: 'ブログ' },
          items: [
            {
              label: 'Reports',
              translations: { 'zh-CN': '运行报告', 'zh-HK': '運行報告', ja: 'レポート' },
              autogenerate: { directory: 'blogs/reports' },
            },
            {
              label: 'Articles',
              translations: { 'zh-CN': '开发日志', 'zh-HK': '開發日誌', ja: '記事' },
              autogenerate: { directory: 'blogs/articles' },
            },
          ],
        },
        {
          label: 'More',
          translations: { 'zh-CN': '更多', 'zh-HK': '更多', ja: 'その他' },
          autogenerate: { directory: 'more' },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingNumbering],
  },
  output: 'static',
});
