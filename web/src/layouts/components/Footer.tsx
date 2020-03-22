import React from 'react'
import { Box, Text, Link as RebassLink } from 'rebass/styled-components'
import styled from 'styled-components'
import Container from '../../components/Container'
import Logo from './Logo'
import Link from '../../components/Link'
import DronningensLogo from './DronningensLogo'
import { flexbox } from 'styled-system'
import ALink from '../../components/ALink'

const FooterContainer = styled(Box)`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.dry};
`

const Footer: React.FC = props => (
  <FooterContainer mt={6} p={5} pt={6} pb={6} bg="dark" {...props}>
    <Container
      sx={{
        display: 'grid',
        gridGap: 3, // theme.space[3]
        gridTemplateColumns: ['1fr', '1fr', '1fr 2fr 1fr'],
        alignItems: 'center',
      }}
    >
      <Box>
        <Logo textColor="white" width="70px" />
        <Text fontSize="4" mt={4} mb={4}>
          Vi vil gjerne jobbe
          <br />
          med deg!
        </Text>
        <Link to="#">Ta kontakt</Link>
      </Box>
      <Box fontSize="4">
        <strong>+47 22 12 05 12</strong>
        <br />
        kontoret@bjerk.io
      </Box>
      <Box fontSize="3">
        Dronningens gate 8B, 0151 Oslo
        <br />
        <Box fontSize="1" mt="2">
          <a href="https://dronningens.no" target="_blank">
            En del av <DronningensLogo height="10px" textColor="white" />
          </a>
        </Box>
        <Box fontSize="2" pt="4">
          Sjekk oss ut på{' '}
          <ALink target="_blank" href="http://github.com/bjerkio">
            Github
          </ALink>
        </Box>
      </Box>
    </Container>
  </FooterContainer>
)

export default Footer
