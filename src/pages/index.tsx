import { Box, Flex, Icon, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Copyright from 'components/copyright'
import SearchIcon from 'components/icons/search-icon'
import Loading from 'components/loading'
import Logo from 'components/logo'
import SearchInput from 'components/search-input'
import React from 'react'

export default function Home() {
  return (
    <Flex
      bgImage="url(/images/deadpool-notebook.png)"
      bgSize="100%"
      w="100%"
      h="100vh"
      flexDirection="column"
      alignItems="center"
    >
      <Logo />
      <InputGroup marginY="auto" w="343px" h="51px">
        <InputLeftElement pointerEvents="none" h="100%">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <SearchInput />
      </InputGroup>
      <Box marginBottom="19px">
        <Copyright />
      </Box>
      <Loading />
    </Flex>
  )
}
