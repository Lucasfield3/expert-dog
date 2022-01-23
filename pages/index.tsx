import type { NextPage } from 'next'
import Head from 'next/head'
import PinkHome  from './PinkHome'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expertdog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./images/dog-paw.svg"></link>
      </Head>
      <PinkHome/>
    </>
  )
}

export default Home
