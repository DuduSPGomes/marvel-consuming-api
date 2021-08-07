import {
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from '@chakra-ui/react'
import SearchIcon from 'components/icons/search-icon'
import Loading from 'components/loading'
import router from 'next/router'
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
      <Heading
        as="h3"
        fontFamily="Bungee Regular"
        fontSize="4xl"
        color="whiteAlpha.800"
        marginTop="75px"
      >
        MYSUPERHERO
      </Heading>
      <InputGroup marginY="auto" w="343px" h="51px">
        <InputLeftElement pointerEvents="none" h="100%">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          h="100%"
          border="1px solid"
          borderColor="#313542"
          bgColor="#1E222F"
          color="#BBBBBB"
          fontFamily="Gotham Regular"
          fontSize="sm"
          fontWeight="700"
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const name = e.currentTarget.value
            if (e.key === 'Enter') {
              router.push(`/search?name=${name}`)
            }
          }}
        />
      </InputGroup>
      <Text
        fontFamily="Roboto Regular"
        color="white"
        fontSize="xs"
        fontWeight="400"
        letterSpacing=".4px"
        marginBottom="19px"
      >
        Data provided by Marvel. © 2020 MARVEL
      </Text>
      <Loading />
    </Flex>
  )
}
