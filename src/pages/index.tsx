import { getStaticInternal, joinStaticProps } from '@fluido/nextjs-utils'
import { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

interface HomePageProps {
  page?: {
    content?: string
  }
}

const HomePage: NextPage<HomePageProps> = ({ page }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>
          {process.env.PROJECT_NAME} - {t('page.home')}
        </title>
      </Head>
      <h1>Home Page</h1>
      <p>{page.content}</p>
    </>
  )
}

export default HomePage

export const getStaticProps = joinStaticProps(
  getStaticInternal(
    'page.content',
    () =>
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iste?',
  ),
)
