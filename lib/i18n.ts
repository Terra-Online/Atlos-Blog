import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'zh-cn', 'zh-hk', 'ja'],
};

export const languageLabels: Record<string, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-hk': '繁體中文',
  ja: '日本語',
};
