import ThemeSwitch from 'app-components/effects/theme'

import 'app-libs/client/i18n'
import 'app-styles/main.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeSwitch />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
