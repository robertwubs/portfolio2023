import '../styles/globals.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'
import Container from '../components/ui/Container'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
}