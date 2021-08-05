import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import { Input } from 'theme/components/input'
import colors from 'theme/foundations/colors'
import styles from 'theme/styles'

const theme = extendTheme<ChakraTheme, any>({
  styles,
  fonts: {
    body: 'Gilroy Medium'
  },
  colors,
  components: {
    Input
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  }
})

export default theme
