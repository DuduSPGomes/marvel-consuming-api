import { Box, Flex, FlexProps } from '@chakra-ui/react'
import BackgroundImage from 'components/background-image'
import Loading from 'components/loading'
import React from 'react'
import TemplateHeader from 'components/template-header'
import TemplateFooter from 'components/template-footer'
import BackToSearchButton from 'components/back-to-search-button'
import Logo from 'components/logo'
import Copyright from 'components/copyright'

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
      <TemplateHeader>
        <BackToSearchButton title="VOLTAR A PESQUISA" />
      </TemplateHeader>
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
      <TemplateFooter>
        <Box>
          <Logo />
        </Box>
        <Box marginBottom="19px">
          <Copyright title="Data provided by Marvel. © 2020 MARVEL" />
        </Box>
      </TemplateFooter>
      <BackgroundImage
        url={props.backgroundImageUrl}
        hasFilter={props.hasFilter}
      />
      <Loading />
    </Flex>
  )
}
