import Head from 'next/head'
import i18next from 'i18next'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          {process.env.PROJECT_NAME} | {i18next.t('home.title')}
        </title>
      </Head>
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage
