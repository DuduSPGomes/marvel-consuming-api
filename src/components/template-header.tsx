import { Box } from '@chakra-ui/react'
import React from 'react'
import BackToSearchButton from './back-to-search-button'

export default function TemplateHeader() {
  return (
    <Box position="relative" zIndex="3" marginY="45px">
      <BackToSearchButton />
    </Box>
  )
}
