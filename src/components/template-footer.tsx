import { Box } from '@chakra-ui/react'
import React from 'react'
import Copyright from './copyright'
import Logo from './logo'

export default function TemplateFooter() {
  return (
    <Box position="relative" zIndex="3" mt="auto">
      <Box>
        <Logo />
      </Box>
      <Box marginBottom="19px">
        <Copyright />
      </Box>
    </Box>
  )
}
