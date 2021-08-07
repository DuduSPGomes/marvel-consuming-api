import { Flex } from '@chakra-ui/react'
import BackgroundImage from 'components/background-image'
import Loading from 'components/loading'
import React from 'react'
import TemplateHeader from 'components/template-header'
import TemplateFooter from 'components/template-footer'

interface ITemplateProps {
  children: React.ReactNode
  backgroundImageUrl?: string
  filter?: boolean
}

export default function Template({
  children,
  backgroundImageUrl,
  filter = false
}: ITemplateProps) {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <TemplateHeader />
      <Flex
        position="relative"
        zIndex="2"
        overflowY="scroll"
        w="full"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Flex>
      <TemplateFooter />
      <BackgroundImage url={backgroundImageUrl} filter={filter} />
      <Loading />
    </Flex>
  )
}
