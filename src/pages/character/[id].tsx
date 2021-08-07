import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { getCharacter } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Template from 'template'

interface IDescriptionPageProps {
  character: Character
}

export default function DescriptionPage({ character }: IDescriptionPageProps) {
  const characterImage =
    character?.thumbnail?.path + '.' + character?.thumbnail?.extension

  return (
    <Template backgroundImageUrl={characterImage} filter={true}>
      <Flex flexDirection="column" alignItems="center">
        <Image
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { id } = context.params
  const character = await getCharacter(Number(id))

  return {
    props: { character }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}
