import { Flex, Box, Icon, Heading, Text } from '@chakra-ui/react'
import BackgroundImage from 'components/background-image'
import SearchIcon from 'components/icons/search-icon'
import Loading from 'components/loading'
import router from 'next/router'
import React from 'react'

interface ITemplateProps {
  children: React.ReactNode
  backgroundImageUrl?: string
  filter?: boolean
}

export default function Template({
  children,
  backgroundImageUrl,
  filter = false
}: ITemplateProps) {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <BackgroundImage url={backgroundImageUrl} filter={filter} />
      <Flex
        marginY="45px"
        alignItems="center"
        onClick={() => router.push('/')}
        position="relative"
        zIndex="3"
      >
        <Box fontFamily="Bungee Regular" fontSize="md" color="#FBF2F2">
          VOLTAR A PESQUISA
        </Box>
        <Icon as={SearchIcon} marginLeft="3" />
      </Flex>
      <Flex
        position="relative"
        zIndex="2"
        overflowY="scroll"
        w="full"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Flex>
      <Box position="relative" zIndex="3" mt="auto">
        <Heading
          as="h3"
          fontFamily="Bungee Regular"
          fontSize="4xl"
          color="whiteAlpha.800"
        >
          MYSUPERHERO
        </Heading>
        <Text
          fontFamily="Roboto Regular"
          color="white"
          fontSize="xs"
          fontWeight="400"
          letterSpacing=".4px"
          marginBottom="19px"
          textAlign="center"
        >
          Data provided by Marvel. © 2020 MARVEL
        </Text>
      </Box>
      <Loading />
    </Flex>
  )
}
