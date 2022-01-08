import type { NextPage } from 'next'
import Head from 'next/head'
import { PinkHome } from './PinkHome'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PinkHome/>
    </>
  )
}

export default Home
