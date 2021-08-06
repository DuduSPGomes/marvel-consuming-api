import React from 'react'
import router from 'next/router'
import {
  Flex,
  Icon,
  Img,
  List,
  ListItem,
  Skeleton,
  Text,
  Heading,
  Box
} from '@chakra-ui/react'
import SearchIcon from 'components/icons/search-icon'
import { getCharacters } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'

export default function SearchPage() {
  const [characters, setCharacters] = React.useState<Character[]>(undefined)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const characterNameStored = localStorage.getItem('@searchedName')
    getCharacters({ nameStartsWith: characterNameStored })
      .then((resp) => setCharacters(resp))
      .catch((error) => setError(error.response.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="100vh"
      bgColor="black"
      position="relative"
    >
      <Flex marginY="45px" alignItems="center" onClick={() => router.back()}>
        <Box fontFamily="Bungee Regular" fontSize="md" color="#FBF2F2">
          VOLTAR A PESQUISA
        </Box>
        <Icon as={SearchIcon} marginLeft="3" />
      </Flex>
      {loading ? (
        <Text color="white">Loading...</Text>
      ) : (
        <List
          spacing="3"
          overflowY="scroll"
          w="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingBottom="120px"
        >
          {characters?.map((character) => (
            <ListItem
              key={character.id}
              display="flex"
              alignItems="center"
              cursor="pointer"
              onClick={() => {
                localStorage.setItem('@characterId', character.id.toString())
                router.push(`/character/description`)
              }}
            >
              <Img
                w="24"
                h="24"
                marginRight="4"
                borderRadius="lg"
                src={
                  character.thumbnail.path + '.' + character.thumbnail.extension
                }
                fallback={<Skeleton w="20" h="20" />}
              />
              <Text
                fontFamily="Bungee Regular"
                fontSize="md"
                color="#FBF2F2"
                w="120px"
              >
                {character.name}
              </Text>
            </ListItem>
          ))}
        </List>
      )}

      {/* {error ? (
        <Heading
          as="h3"
          fontFamily="Bungee Regular"
          fontSize="4xl"
          color="whiteAlpha.800"
        >
          {error}
        </Heading>
      ) : null} */}

      <Img src="/images/batman.png" position="absolute" bottom="0" zIndex="2" />
      <Box position="relative" zIndex="3">
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
  )
}
