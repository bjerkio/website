/** @jsx */
import React from 'react'
import Logo from './Logo'
import { jsx, Box, Flex, Link } from 'theme-ui'

const Header = () => (
  <Box sx={{ width: '100%', position: 'fixed', zIndex: 2, bg: 'primary' }}>
    <Flex
      sx={{
        alignItems: 'center',
        p: 4,
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        py: 4,
      }}
    >
      <Link href="/">
        <Logo height="40px" dotColor="white" />
      </Link>
      <Flex
        sx={{
          flexGrow: 1,
          fontSize: 3,
          color: 'iron',
          justifyContent: 'flex-end',
          '>a': {
            p: 2,
            '&:last-child': {
              pr: 0,
            },
            '&:hover': {
              color: 'secondary',
              transition: 'color 0.2s',
            },
          },
        }}
      >
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
      </Flex>
    </Flex>
  </Box>
)

export default Header
