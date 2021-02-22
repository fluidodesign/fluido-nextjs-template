import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{process.env.PROJECT_NAME}</title>
      </Head>
      <h1>{t('home.title')} Page</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  return {
    props: {},
    revalidate: 1,
  }
}

export default HomePage
