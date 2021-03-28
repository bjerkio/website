/** @jsx */
import React from 'react';
import { Box, Link, Text } from 'theme-ui';
import { Container } from '../../../container';
import { Logo } from '../logo';
import { NetworksLinks } from './networks-links';

export const Footer: React.FC = (props) => (
  <Container sx={{ pt: [5, 6, 6], bg: 'dark', color: 'white' }} {...props}>
    <Box>
      <Logo color='white' sx={{ color: 'white', width: '5em' }} />
    </Box>
    <Box
      sx={{
        display: 'grid',
        gridGap: [1,1,6],
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 0.5fr 1fr 1fr'],
        alignItems: 'start',
        pt: 0,
      }}
    >
      <Box>
        <Text sx={{ fontSize: 40, my: 4, lineHeight: '40px', fontWeight: 700 }}>
          Vi vil gjerne jobbe
          <br />
          med deg!
        </Text>
      </Box>
      <Box sx={{ fontSize: 28, my: 4 }}>
        <Link href="#">+47 22 12 05 12</Link>
        <br />
        <Link href="#">kontoret@bjerk.io</Link>
      </Box>
      <Box>
        <Text sx={{ fontSize: 28, my: 4 }}>
          Dronningens gate 8B
          <br />
          0151 Oslo
        </Text>
      </Box>
      <NetworksLinks
        sx={{ display: ['block', 'block', 'none'], mt: 3, mb: 5 }}
      />
      <Box sx={{ textAlign: ['start', 'start', 'end'], my: 4 }}>
        <Text sx={{ fontSize: 28 }}>
          Vi er alltid på utkikk etter
          <br />
          nye talenter – si hei!
        </Text>
        <Text sx={{ fontSize: 20, color: 'primary', mt: 3 }}>
          Se ledige stillinger
          <br />
          Personvern
        </Text>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        alignItems: 'start',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        pt: '4rem',
        pb: '4rem',
      }}
    >
      <Box>
        <Text sx={{ fontSize: 20, whiteSpace: 'pre' }}>© 2019 Bjerk. Alle rettigheter.     998 732 867 MVA</Text>
      </Box>
      <NetworksLinks sx={{ display: ['none', 'none', 'block'] }} />
    </Box>
  </Container>
);
