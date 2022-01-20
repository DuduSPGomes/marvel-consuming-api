import { Flex, FlexProps } from '@chakra-ui/react'
import BackgroundImage from 'components/background-image'
import Loading from 'components/loading'
import React from 'react'
import TemplateHeader from 'components/template-header'
import TemplateFooter from 'components/template-footer'

interface ITemplateProps extends FlexProps {
  children: React.ReactNode
  backgroundImageUrl?: string
  hasFilter?: false
}

export default function Template(props: ITemplateProps) {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="full"
      h="100vh"
      {...props}
    >
      <TemplateHeader />
      <Flex
        position="relative"
        zIndex="2"
        overflowY="scroll"
        w="full"
        flexDirection="column"
        alignItems="center"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {props.children}
      </Flex>
      <TemplateFooter />
      <BackgroundImage
        url={props.backgroundImageUrl}
        hasFilter={props.hasFilter}
      />
      <Loading />
    </Flex>
  )
}
