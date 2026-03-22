import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'zh-hk',
  languages: ['en', 'zh-cn', 'zh-hk', 'ja', 'ko'],
};

export const languageLabels: Record<string, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-hk': '繁體中文',
  ja: '日本語',
  ko: '한국어',
};

export const sectionLabels = {
  docs: {
    en: "Docs",
    ja: "ドキュメント",
    ko: "문서",
    "zh-cn": "文档",
    "zh-hk": "文件",
  },
  community: {
    en: "Community",
    ja: "コミュニティ",
    ko: "커뮤니티",
    "zh-cn": "社区",
    "zh-hk": "社群",
  },
  blog: {
    en: "Blog",
    ja: "ブログ",
    ko: "블로그",
    "zh-cn": "博客",
    "zh-hk": "部落格",
  },
  more: {
    en: "More",
    ja: "その他",
    ko: "더보기",
    "zh-cn": "更多",
    "zh-hk": "更多",
  },
};
