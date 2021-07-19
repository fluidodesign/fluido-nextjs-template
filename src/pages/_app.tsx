import { PageContext } from 'app-hooks/page'
import type { AppProps } from 'next/app'
import { GlobalStyles, ResetStyles } from 'app-styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { page = {}, ...props } = pageProps
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <PageContext.Provider value={page}>
        <Component page={page} {...props} />
      </PageContext.Provider>
    </>
  )
}
