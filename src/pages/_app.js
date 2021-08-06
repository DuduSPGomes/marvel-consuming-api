import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'
import Fonts from 'theme/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <ChakraProvider theme={theme} resetCSS>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
