// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.opendfieldmap.org',
  integrations: [
    starlight({
      title: 'Open Endfield Map',
      lastUpdated: true,
      locales: {
        en: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
      },
      defaultLocale: 'en',
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
        PageSidebar: './src/components/PageSidebar.astro',
      },
      sidebar: [
        {
          label: 'Docs',
          translations: { 'zh-CN': '文档' },
          items: [
            { label: 'Terms of Service', translations: { 'zh-CN': '服务条款' }, slug: 'docs/tos' },
            { label: 'Privacy Policy', translations: { 'zh-CN': '隐私政策' }, slug: 'docs/privacy' },
            { label: 'Cookie Policy', translations: { 'zh-CN': 'Cookie 政策' }, slug: 'docs/cookie' },
          ],
        },
        {
          label: 'Community',
          translations: { 'zh-CN': '社区' },
          items: [
            { label: 'About Us', translations: { 'zh-CN': '关于我们' }, slug: 'community/about-us' },
            { label: 'Join Us', translations: { 'zh-CN': '加入我们' }, slug: 'community/join-us' },
            { label: 'Support', translations: { 'zh-CN': '支持我们' }, slug: 'community/support' },
          ],
        },
        {
          label: 'Blogs',
          translations: { 'zh-CN': '博客' },
          items: [
            {
              label: 'Reports',
              translations: { 'zh-CN': '运行报告' },
              autogenerate: { directory: 'blogs/reports' },
            },
            {
              label: 'Articles',
              translations: { 'zh-CN': '开发日志' },
              autogenerate: { directory: 'blogs/articles' },
            },
          ],
        },
        {
          label: 'More',
          translations: { 'zh-CN': '更多' },
          items: [
            { label: 'Credits', translations: { 'zh-CN': '致谢' }, slug: 'more/credits' },
            { label: 'Friend Links', translations: { 'zh-CN': '友情链接' }, slug: 'more/friendlinks' },
            { label: 'Others', translations: { 'zh-CN': '其他' }, slug: 'more/others' },
          ],
        },
      ],
    }),
  ],
  output: 'static',
});
