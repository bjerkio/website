import React from 'react'
import { Box, Text } from 'theme-ui'
import Container from '../../components/Container'
import Logo from './Logo'
import Link from '../../components/Link'
import ALink from '../../components/ALink'

const Footer: React.FC = props => (
  <Box sx={{ p: 5, mt: 6, pt: 6, bg: 'dark', color: 'white' }} {...props}>
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
        <Text sx={{ fontSize: 4, my: 4 }}>
          Vi vil gjerne jobbe
          <br />
          med deg!
        </Text>
        <Link to="#">Ta kontakt</Link>
      </Box>
      <Box sx={{ fontSize: 4 }}>
        <strong>+47 22 12 05 12</strong>
        <br />
        kontoret@bjerk.io
      </Box>
      <Box sx={{ fontSize: 3 }}>
        Dronningens gate 8B, 0151 Oslo
        <br />
        <Box sx={{ fontSize: 2, pt: 4 }}>
          Sjekk oss ut på{' '}
          <ALink target="_blank" href="http://github.com/bjerkio">
            Github
          </ALink>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default Footer
