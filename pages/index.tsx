import Head from 'next/head'
import i18next from 'i18next'
import { useRef } from 'react'
import Ripple from 'app-components/effects/ripple'

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const ref = useRef()

  return (
    <>
      <Head>
        <title>
          {process.env.PROJECT_NAME} | {i18next.t('home.title')}
        </title>
      </Head>
      <h1>Home Page</h1>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          backgroundColor: 'red',
        }}>
        <Ripple anchor={ref} />
      </div>
    </>
  )
}

export default HomePage
