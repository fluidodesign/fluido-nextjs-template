import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import localeConfig from 'app-config/locale.json'

import ptBR from './locales/pr-BR.json'
import en from './locales/en.json'

i18next.use(initReactI18next).init({
  fallbackLng: localeConfig.defaultLocale,
  ns: ['main'],
  defaultNS: 'main',
  preload: localeConfig.locales,

  resources: {
    // Imported languages
    'pt-BR': { main: ptBR },
    en: { main: en },
  },

  interpolation: {
    escapeValue: false,
  },
  // special options for react-i18next
  // learn more: https://react.i18next.com/components/i18next-instance
  react: {
    useSuspense: false,
  },
})

export default i18next
