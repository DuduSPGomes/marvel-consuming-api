import { Box } from '@chakra-ui/react'
import React from 'react'

export default function TemplateHeader(props) {
  return (
    <Box position="relative" zIndex="3" marginY="45px">
      {props.children}
    </Box>
  )
}
