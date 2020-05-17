import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Brooke() {
    return (
      <Layout>
          <Head>
          <title>We Love Brooke</title>
        </Head>
        <h1>How Can We Help</h1>
        <p>Lets try the big things</p>
        <ol>
            <li>Undesrtand the big things</li>
            <li>I'm snotty<br/>
              <ol>
                <li>Get a tissue</li>
                <li>Blow my nose</li>
                <li>Get rid of tissue</li>
              </ol>
            </li>
            <li>My eye keep leaking wet stuff</li>
            <li>College</li>
            <li>Lockdown</li>
            <li>I cant stop Crying</li>
            <li>I'm tired</li>
            <li>Not having any friends</li>
            <li>Getting frustrated easily</li>
        </ol>
        <h2>

          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        </Layout>
    )
  }