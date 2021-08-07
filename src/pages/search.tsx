import React from 'react'
import router from 'next/router'
import { Img, List, ListItem, Skeleton, Text } from '@chakra-ui/react'
import { getCharacters } from 'data/repositories/characters.repository'
import { Character } from 'domain/character.model'
import Template from 'template'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

interface ISearchPageProps {
  characters: Character[]
}

export default function SearchPage({ characters }: ISearchPageProps) {
  return (
    <Template>
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
              router.push(`/character/${character.id}`)
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { name } = context.query
  const characters = await getCharacters({ nameStartsWith: name as string })

  if (!characters.length) {
    return {
      notFound: true
    }
  }

  return {
    props: { characters }
  }
}
