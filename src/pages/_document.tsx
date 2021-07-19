import HeaderMeta from 'app-common/header-meta'
import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

if (!process.browser) {
  React.useLayoutEffect = () => {}
}

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
          <HeaderMeta />
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
