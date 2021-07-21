import { PageContext } from 'app-hooks/page'
import { BaselineStyle } from 'app-styles/theme/baseline'
import { DarkThemeStyle } from 'app-styles/theme/dark-theme'
import { ElevationStyle } from 'app-styles/theme/elevation'
import { GlobalStyles, ResetStyles } from 'app-styles/theme/global'
import { LightThemeStyle } from 'app-styles/theme/light-theme'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { page = {}, ...props } = pageProps
  return (
    <>
      <ResetStyles />
      <LightThemeStyle />
      <DarkThemeStyle />
      <BaselineStyle />
      <ElevationStyle />
      <GlobalStyles />
      <PageContext.Provider value={page}>
        <Component page={page} {...props} />
      </PageContext.Provider>
    </>
  )
}
