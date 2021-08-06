import Head from 'next/head'
import AppProvider from '../contexts/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import Fonts from 'theme/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <AppProvider>
        <ChakraProvider theme={theme} resetCSS>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
