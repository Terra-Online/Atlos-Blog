// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';

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
          items: [
            { label: 'Terms of Service', translations: { 'zh-CN': '服务条款', 'zh-HK': '服務條款', ja: '利用規約' }, slug: 'docs/tos' },
            { label: 'Privacy Policy',   translations: { 'zh-CN': '隐私政策', 'zh-HK': '隱私政策', ja: 'プライバシーポリシー' }, slug: 'docs/privacy' },
            { label: 'Cookie Policy',    translations: { 'zh-CN': 'Cookie 政策', 'zh-HK': 'Cookie 政策', ja: 'Cookie ポリシー' }, slug: 'docs/cookie' },
          ],
        },
        {
          label: 'Community',
          translations: { 'zh-CN': '社区', 'zh-HK': '社群', ja: 'コミュニティ' },
          items: [
            { label: 'About Us', translations: { 'zh-CN': '关于我们', 'zh-HK': '關於我們', ja: 'について' }, slug: 'community/about-us' },
            { label: 'Join Us',  translations: { 'zh-CN': '加入我们', 'zh-HK': '加入我們', ja: '参加する' }, slug: 'community/join-us' },
            { label: 'Support',  translations: { 'zh-CN': '支持我们', 'zh-HK': '支持我們', ja: 'サポート' }, slug: 'community/support' },
          ],
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
          items: [
            { label: 'Credits',      translations: { 'zh-CN': '致谢', 'zh-HK': '鉤謝', ja: 'クレジット' }, slug: 'more/credits' },
            { label: 'Friend Links', translations: { 'zh-CN': '友情链接', 'zh-HK': '友情連結', ja: 'リンク' }, slug: 'more/friendlinks' },
            { label: 'Others',       translations: { 'zh-CN': '其他', 'zh-HK': '其他', ja: 'その他' }, slug: 'more/others' },
          ],
        },
      ],
    }),
  ],
  output: 'static',
});
