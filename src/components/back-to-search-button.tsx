import { Button, Icon } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import SearchIcon from './icons/search-icon'

export default function BackToSearchButton() {
  return (
    <Button
      variant="unstyled"
      display="flex"
      alignItems="center"
      onClick={() => router.push('/')}
      rightIcon={<Icon as={SearchIcon} />}
      fontFamily="Bungee Regular"
      fontSize="md"
      color="#FBF2F2"
    >
      VOLTAR A PESQUISA
    </Button>
  )
}
