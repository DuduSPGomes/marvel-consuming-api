import React from 'react'
import router from 'next/router'
import { Img, List, ListItem, Skeleton, Text, Heading } from '@chakra-ui/react'
import { getCharacters } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'
import Template from 'template'

export default function SearchPage() {
  const [characters, setCharacters] = React.useState<Character[]>(undefined)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const characterNameStored = localStorage.getItem('@searchedName')
    getCharacters({ nameStartsWith: characterNameStored })
      .then((resp) => {
        if (!resp.length)
          setError('DESCULPE, NÃO ECONTRAMOS UM PERSONAGEM COM ESSE NOME')
        setCharacters(resp)
      })
      .catch((error) => setError(error.response.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Template>
      {error ? (
        <Heading
          as="h3"
          fontFamily="Bungee Regular"
          fontSize="xl"
          color="white"
          textAlign="center"
          mx="4"
        >
          {error}
        </Heading>
      ) : null}

      {loading ? (
        <Text color="white">Loading...</Text>
      ) : (
        <List
          spacing="3"
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

      <Img
        src="/images/batman.png"
        position="fixed"
        left="0"
        bottom="0"
        zIndex="2"
      />
    </Template>
  )
}
