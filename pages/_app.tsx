import ThemeSwitch from 'app-components/effects/theme'

import 'libs/i18n'
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
