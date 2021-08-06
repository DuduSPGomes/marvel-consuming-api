import { Button, Flex, Img, Text } from '@chakra-ui/react'
import { getCharacter } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Template from 'template'

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

  const characterImage =
    character?.thumbnail?.path + '.' + character?.thumbnail?.extension

  return (
    <Template backgroundImage={characterImage}>
      <Flex flexDirection="column" alignItems="center">
        <Img
          w="36"
          h="36"
          borderRadius="xl"
          border="2px inset"
          borderColor="white"
          src={characterImage}
        />
        <Text fontFamily="Bungee Regular" fontSize="md" color="#FBF2F2" mt="3">
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
    </Template>
  )
}
