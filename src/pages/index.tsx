import { joinStaticProps } from '@fluido/react-utils'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>
          {process.env.PROJECT_NAME} - {t('page.home')}
        </title>
      </Head>
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage

export const getStaticProps = joinStaticProps()
