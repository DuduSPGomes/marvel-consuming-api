import Head from 'next/head'
import AppProvider from '../contexts/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <AppProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
