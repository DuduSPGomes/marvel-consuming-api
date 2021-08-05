import { Styles, mode } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode('white', 'black')(props)
    }
  })
}

export default styles
