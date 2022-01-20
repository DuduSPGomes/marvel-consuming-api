import React from 'react'
import { Text } from '@chakra-ui/react'

interface Props {
  title: string
}

export default function Copyright({ title }: Props) {
  return (
    <Text
      fontFamily="Roboto Regular"
      color="white"
      fontSize="xs"
      fontWeight="400"
      letterSpacing=".4px"
      textAlign="center"
    >
      {title}
    </Text>
  )
}
