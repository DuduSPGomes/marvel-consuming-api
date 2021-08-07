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
      bgImage={[
        'url(/images/mobile-deadpool-notebook.png)',
        'url(/images/desktop-deadpool-notebook.png)'
      ]}
      bgSize="cover"
      w="auto"
      h="100vh"
      flexDirection="column"
      alignItems="center"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Box mt={[20, 28]}>
        <Logo />
      </Box>
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
