import { usePrefersReducedMotion, Flex, Icon } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import useLoading from 'hooks/useLoading'
import React from 'react'
import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  const loading = useLoading()

  const spinKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `
  const prefersReducedMotion = usePrefersReducedMotion()

  const spinAnimation = prefersReducedMotion
    ? undefined
    : `${spinKeyframes} infinite .8s linear`

  return loading ? (
    <Flex
      w="full"
      h="100vh"
      bgColor="rgba(0,0,0,.8)"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      zIndex="4"
    >
      <Icon
        as={VscLoading}
        animation={spinAnimation}
        color="white"
        w="8"
        h="8"
      />
    </Flex>
  ) : null
}
