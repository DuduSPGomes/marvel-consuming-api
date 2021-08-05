import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Input: ComponentMultiStyleConfig = {
  parts: [],
  baseStyle: {},
  sizes: {},
  variants: {
    outline: {
      field: {
        h: 14,
        fontFamily: 'Gilroy Medium',
        fontSize: 'sm',
        fontWeight: 'medium',
        border: '1px solid',
        borderColor: 'geyser.600',
        borderRadius: '4px',
        _placeholder: {
          fontFamily: 'Gilroy Medium',
          fontWeight: 'medium',
          fontSize: 'sm',
          color: 'nevada.600'
        }
      }
    }
  },
  defaultProps: {}
}
