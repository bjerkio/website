import React from 'react'
import { Box, Flex, Link, Text } from 'theme-ui'
import Container from '../../components/Container'
import Logo from './Logo'

const Footer: React.FC = props => (
  <Box sx={{ p: 5, mt: 6, pt: 6, bg: 'dark', color: 'white' }} {...props}>
    <Container
      sx={{
        display: 'grid',
        gridGap: 3, // theme.space[3]
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 0.5fr 1fr 1fr'],
        alignItems: 'center',
      }}
    >
      <Box>
        <Logo textColor="white" width="70px" />
        <strong>
          <Text sx={{ fontSize: 4, my: 4, lineHeight: '22px' }}>
            Vi vil gjerne jobbe
            <br />
            med deg!
          </Text>
        </strong>
        <Text sx={{ fontSize: 2 }}>© 2019 Bjerk. Alle rettigheter.</Text>
      </Box>
      <Box sx={{lineHeight: '20px'}}>
        <Link href="#">+47 22 12 05 12</Link>
        <br />
        <Link href="#">kontoret@bjerk.io</Link>
      </Box>
      <Box>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          Dronningens gate 8B
          <br />
          0151 Oslo
        </Text>
      </Box>
      <Box sx={{ fontSize: 3, textAlign: 'end' }}>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          Vi er alltid på utkikk etter 
          <br />
          nye talenter – si hei!
        </Text>
        <Text sx={{ fontSize: 2, color: 'primary', mt: 3, lineHeight: '22px' }}>
          Se ledige stillinger
          <br />
          Personvern
        </Text>
      </Box>
    </Container>
  </Box>
)

export default Footer
