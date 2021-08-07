import React from 'react'
import Template from 'template'
import { Text } from '@chakra-ui/react'

export default function NotFoundPage() {
  return (
    <Template backgroundImage="/images/gambit-hand.png">
      <Text
        fontFamily="Bungee Regular"
        fontSize="2xl"
        color="whiteAlpha.800"
        textAlign="center"
      >
        DESCULPE, NOME DE PERSONAGEM NÃO ENCONTRADO
      </Text>
    </Template>
  )
}
