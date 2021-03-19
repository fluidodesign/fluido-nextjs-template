import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const oldRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        oldRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const styletTags = sheet.getStyleElement()

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styletTags}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name='apple-mobile-web-app-title'
            content={process.env.PROJECT_NAME}
          />
          <meta name='application-name' content={process.env.PROJECT_NAME} />
          <meta name='theme-color' content='#ffffff' />

          <link rel='shortcut icon' href='/favicon.ico' />

          <link
            rel='stylesheet'
            crossOrigin='anonymous'
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
