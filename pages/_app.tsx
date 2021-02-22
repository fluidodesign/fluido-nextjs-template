import { AppProps } from 'next/app'

import i18n from 'app-libs/client/i18n'
import 'app-hooks/effects/theme'
import 'app-styles/main.scss'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  if (router.locale) {
    i18n.changeLanguage(router.locale)
  }

  return <Component {...pageProps} />
}

export default MyApp
