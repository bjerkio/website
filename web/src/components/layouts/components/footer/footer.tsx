/** @jsx */
import React from 'react';
import { Box, Link, Text } from 'theme-ui';
import { Container } from '../../../container';
import { Logo } from '../logo';
import { NetworskLinks } from './networks-links';

export const Footer: React.FC = (props) => (
  <Container
    sx={{ mt: 6, pt: [5, 6, 6], bg: 'dark', color: 'white' }}
    {...props}
  >
    <Box>
      <Logo sx={{ color: 'white', width: '4em' }} />
    </Box>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 0.5fr 1fr 1fr'],
        alignItems: 'start',
        pt: 0,
      }}
    >
      <Box>
        <strong>
          <Text sx={{ fontSize: 4, my: 4, lineHeight: '22px' }}>
            Vi vil gjerne jobbe
            <br />
            med deg!
          </Text>
        </strong>
      </Box>
      <Box sx={{ lineHeight: '20px' }}>
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
      <NetworskLinks
        sx={{ display: ['block', 'block', 'none'], mt: 3, mb: 5 }}
      />
      <Box sx={{ fontSize: 3, textAlign: ['start', 'start', 'end'] }}>
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
        <Text sx={{ fontSize: 2 }}>© 2019 Bjerk. Alle rettigheter.</Text>
      </Box>
      <NetworskLinks sx={{ display: ['none', 'none', 'block'] }} />
    </Box>
  </Container>
);
