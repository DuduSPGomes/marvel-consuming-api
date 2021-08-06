import { Box, Button, Flex, Icon, Img, Text, Heading } from '@chakra-ui/react'
import SearchIcon from 'components/icons/search-icon'
import { getCharacter } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'
import router from 'next/router'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function DescriptionPage() {
  const [character, setCharacter] = React.useState<Character>(undefined)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const characterIdStored = Number(localStorage.getItem('@characterId'))
    getCharacter(characterIdStored)
      .then((resp) => setCharacter(resp))
      .catch((error) => setError(error?.response?.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Box position="relative">
      <Box
        w="full"
        h="100vh"
        bgImage={`url(${
          character?.thumbnail?.path + '.' + character?.thumbnail?.extension
        })`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        filter="blur(10px)"
        position="absolute"
        zIndex="1"
      />

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        h="100vh"
        position="relative"
        zIndex="2"
      >
        <Flex
          marginY="45px"
          alignItems="center"
          onClick={() => router.push('/')}
        >
          <Box fontFamily="Bungee Regular" fontSize="md" color="#FBF2F2">
            VOLTAR A PESQUISA
          </Box>
          <Icon as={SearchIcon} marginLeft="3" />
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Img
            w="36"
            h="36"
            borderRadius="xl"
            border="2px inset"
            borderColor="white"
            src={
              character?.thumbnail?.path + '.' + character?.thumbnail?.extension
            }
          />
          <Text
            fontFamily="Bungee Regular"
            fontSize="md"
            color="#FBF2F2"
            mt="3"
          >
            {character?.name.split(' (')[0]}
          </Text>
        </Flex>
        <Text
          fontFamily="Bungee Regular"
          fontSize="md"
          color="#FBF2F2"
          textAlign="center"
          mx="3"
          mt="6"
        >
          {character?.description.slice(0, 180)}...
        </Text>
        <Button
          leftIcon={<FaPlus />}
          variant="solid"
          bgColor="#1E222F"
          color="white"
          my="6"
        >
          INFORMAÇÕES
        </Button>

        <Box mt="auto">
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
      </Flex>
    </Box>
  )
}
