import { Flex } from '@chakra-ui/react'
import React from 'react'

interface IBackgroundImageProps {
  url: string
  hasFilter: boolean
}

/**
 * @param url A string form background image
 * @param hasFilter A boolean value for show blur on background image
 */

export default function BackgroundImage({
  url,
  hasFilter
}: IBackgroundImageProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="100vh"
      bgColor="black"
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      filter={`${hasFilter ? 'blur(10px)' : ''}`}
      position="absolute"
      zIndex="1"
    />
  )
}
