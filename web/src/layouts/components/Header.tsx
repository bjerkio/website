import React from 'react'
import Logo from './Logo'
import { Box, Flex, Link } from 'rebass/styled-components'
import styled from 'styled-components'
import { typography, flexbox, FlexboxProps, color } from 'styled-system'
import Container from '../../components/Container'

const Navigation = styled.div.attrs<FlexboxProps>({
  flexGrow: 1,
  textAlign: 'right',
  fontSize: 3,
  // fontWeight: 'bold',
  color: 'iron',
  display: 'flex',
})`
  ${flexbox}
  ${typography}
  ${color}
  a {
    color: inherit;
    text-decoration: none;
    padding: ${props => props.theme.space[3]}px;
    &:last-child {
      padding-right: 0px;
    }
    &:hover {
      color: ${props => props.theme.colors.secondary};
      transition: color 0.2s;
    }
  }
`

const Header = () => (
  <Box width="100%" style={{ position: 'fixed', zIndex: 2 }} bg="primary">
    <Flex
      alignItems="center"
      p={4}
      style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
      pb={4}
      pt={4}
    >
      <Link href="/">
        <Logo height="40px" dotColor="white" />
      </Link>
      <Navigation>
        <Link variant="nav" href="/om-oss">
          Om oss
        </Link>
        {/* <Link variant="nav" href="#!">
        Vår historie
      </Link> */}
        {/* <Link variant="nav" href="#!">
        Tjenester
      </Link> */}
        <Link variant="nav" href="/contact">
          Kontakt oss
        </Link>
      </Navigation>
    </Flex>
  </Box>
)

export default Header
