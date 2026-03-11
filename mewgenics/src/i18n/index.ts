import { createI18n } from 'vue-i18n'
import en from './locales/en'

/** Locales live under i18n/locales (Heartopia-style). */
export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false, // 文案里有意使用 HTML（如 <strong>、<a>），用 v-html 渲染，关闭 XSS 警告
  messages: {
    en,
  },
})

export default i18n
