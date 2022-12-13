import '../styles/globals.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'
import Container from '../components/ui/Container'

import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Container>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Container>
  </>
}