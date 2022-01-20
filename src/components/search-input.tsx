import router from 'next/router'
import React from 'react'
import { Input } from '@chakra-ui/react'

export default function SearchInput() {
  return (
    <Input
      type="text"
      h="100%"
      border="1px solid"
      borderColor="#313542"
      bgColor="#1E222F"
      color="#BBBBBB"
      fontFamily="Gotham Regular"
      fontSize="sm"
      fontWeight="700"
      paddingLeft="34px"
      borderRightRadius="none"
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value
        if (e.key === 'Enter') {
          router.push(`/search?name=${name}`)
        }
      }}
    />
  )
}
