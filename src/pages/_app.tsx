import { AppProps } from 'next/app'
import { useTheme } from '@fluido/react-effects'
import { loadI18Next } from '@fluido/react-utils'
import { PageState } from 'app-hooks/page'

import locale from 'app-config/locale.json'
import en from 'app-config/locales/en.json'
import ptBR from 'app-config/locales/pt-BR.json'

import '@fluido/react-components/dist/styles/elevation.scss'
import '@fluido/react-components/dist/styles/material.scss'
import 'app-styles/main.scss'
import { useEffect } from 'react'
import { getI18n } from 'react-i18next'

loadI18Next({
  defaultLocale: locale.defaultLocale,
  locales: locale.locales,
  resources: {
    en: { main: en },
    'pt-BR': { main: ptBR },
  },
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useTheme(!process.browser)
  const { page, ...props } = pageProps || {}
  PageState.set(page)

  useEffect(() => {
    if (router.locale) {
      const i18n = getI18n()
      i18n.changeLanguage(router.locale)
    }
  }, [router.locale])

  return <Component {...props} />
}

export default MyApp
