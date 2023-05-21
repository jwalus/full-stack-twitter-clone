import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/Form'
import PostFeed from '../components/posts/PostFeed'

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <Header label="Home" />
      <Form placeholder="Whats happening?" />
      <PostFeed />
    </>
  )
}