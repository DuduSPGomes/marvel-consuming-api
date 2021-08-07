import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import BackgroundImage from 'components/background-image'
import Loading from 'components/loading'
import React from 'react'
import BackToSearchButton from 'components/back-to-search-button'

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
      <BackToSearchButton />
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
