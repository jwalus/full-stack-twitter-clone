import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <Header label="Home" />
    </>
  )
}