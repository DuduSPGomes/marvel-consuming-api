import { Box } from '@chakra-ui/react'
import React from 'react'

export default function TemplateFooter(props) {
  return (
    <Box position="relative" zIndex="3" mt="auto">
      {props.children}
    </Box>
  )
}
