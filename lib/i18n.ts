import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'zh-cn', 'zh-hk', 'ja', 'ko', 'ru'],
};

export const languageLabels: Record<string, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-hk': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  ru: 'Русский',
};

export const sectionLabels = {
  docs: {
    en: "Docs",
    ja: "ドキュメント",
    ko: "문서",
    ru: "Документация",
    "zh-cn": "文档",
    "zh-hk": "文件",
  },
  community: {
    en: "Community",
    ja: "コミュニティ",
    ko: "커뮤니티",
    ru: "Сообщество",
    "zh-cn": "社区",
    "zh-hk": "社群",
  },
  blog: {
    en: "Blog",
    ja: "ブログ",
    ko: "블로그",
    ru: "Блог",
    "zh-cn": "博客",
    "zh-hk": "部落格",
  },
  more: {
    en: "More",
    ja: "その他",
    ko: "더보기",
    ru: "Ещё",
    "zh-cn": "更多",
    "zh-hk": "更多",
  },
  sponsors: {
    en: "Sponsors",
    ja: "スポンサー",
    ko: "후원자",
    ru: "Спонсоры",
    "zh-cn": "赞助者",
    "zh-hk": "贊助者",
  },
};
