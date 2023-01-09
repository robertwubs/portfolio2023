import '../styles/globals.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'
import Container from '../components/ui/Container'

import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

import { GlobalProvider } from 'lib/context/GlobalContext'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <GlobalProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Container>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Container>
  </GlobalProvider>
}