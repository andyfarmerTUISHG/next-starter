import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function SecondPost() {
    return (
      <Layout>
          <Head>
          <title>Chunking Things Up</title>
        </Head>
        <h1>How to Deal with Big Issues</h1>
        <p>So learning how to do this is hard if I expect to do it in one chunk!</p>
        <ol>
            <li>Undesrtand the big things</li>
            <li>Break the big things into smaller chunks</li>
            <li>Tackle one of the smaller chunks</li>
            <li>Tackle another smaller chunks</li>
            <li>Repeat steps 2 till 3 untill all are done</li>
        </ol>
        <h2>

          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        </Layout>
    )
  }