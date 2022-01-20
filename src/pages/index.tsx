import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  keyframes,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import Copyright from 'components/copyright'
import SearchIcon from 'components/icons/search-icon'
import Loading from 'components/loading'
import Logo from 'components/logo'
import useLoading from 'hooks/useLoading'
import router from 'next/router'
import React from 'react'

export default function Home() {
  const [inputValue, setInputValue] = React.useState('')

  const loading = useLoading()
  const spinKeyframes = keyframes`
    from { transform: translateX(0deg); }
    to { transform: translateX(-100%); }
  `
  const prefersReducedMotion = usePrefersReducedMotion()

  const spinAnimation = prefersReducedMotion
    ? undefined
    : `${spinKeyframes} .3s linear forwards`

  return (
    <Flex
      animation={loading ? spinAnimation : null}
      bgImage={[
        'url(/images/mobile-deadpool-notebook.png)',
        'url(/images/desktop-deadpool-notebook.png)'
      ]}
      bgSize="cover"
      w="auto"
      h="100vh"
      flexDirection="column"
      alignItems="center"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Box mt={[20, 28]}>
        <Logo />
      </Box>
      <InputGroup marginY="auto" w="343px" h="51px">
        <InputLeftElement pointerEvents="none" h="100%">
          <Icon as={SearchIcon} />
        </InputLeftElement>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.currentTarget.value)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              router.push(`/search?name=${e.currentTarget.value}`)
            }
          }}
        />
        <Button
          onClick={() => router.push(`/search?name=${inputValue}`)}
          h="51px"
          borderLeftRadius="none"
        >
          Avançar
        </Button>
      </InputGroup>
      <Box marginBottom="19px">
        <Copyright title="Data provided by Marvel. © 2020 MARVEL" />
      </Box>
      <Loading />
    </Flex>
  )
}
