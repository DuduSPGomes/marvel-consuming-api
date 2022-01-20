import { Button, Icon } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import SearchIcon from './icons/search-icon'

interface Props {
  title: string
}

export default function BackToSearchButton({ title }: Props) {
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
      {title}
    </Button>
  )
}
