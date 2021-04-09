import React, { useEffect } from 'react'
import { PageProvider } from 'app-hooks/page'
import { AppProps } from 'next/app'
import { getI18n } from 'react-i18next'
import { NotificationProvider } from '@fluido/react-notification'
import { useTheme } from '@fluido/react-effects'
import { loadI18Next } from '@fluido/react-utils'

import locale from 'app-config/locale.json'
import en from 'app-config/locales/en.json'
import ptBR from 'app-config/locales/pt-BR.json'

import '@fluido/sass-styles/lib/elevation.scss'
import '@fluido/sass-styles/lib/material.scss'
import 'app-styles/main.scss'

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

  useEffect(() => {
    if (router.locale) {
      const i18n = getI18n()
      i18n.changeLanguage(router.locale)
    }
  }, [router.locale])

  return (
    <PageProvider value={page}>
      <NotificationProvider>
        <Component page={page} {...props} />
      </NotificationProvider>
    </PageProvider>
  )
}

export default MyApp
