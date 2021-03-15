import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document<{ styleTags: Array<ReactElement> }> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )
    const styletTags = sheet.getStyleElement()

    return { ...page, styletTags }
  }

  render() {
    const { styleTags } = this.props

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
          {styleTags}
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
