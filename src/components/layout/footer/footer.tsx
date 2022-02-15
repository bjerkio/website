import { Box, Container, Flex, Grid, Link, Text } from 'theme-ui';
import { Booking } from '../../booking';
import { Logo } from '../../logo';
import { NetworksLinks } from './networks-links';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: 'black80', mt: 'auto' }}>
    <Container variant="readable">
      <Flex
        sx={{ flexDirection: 'column', py: 5, gap: 5, color: 'background' }}
      >
        <Logo sx={{ height: '30px', mr: 'auto', color: 'white' }} />
        <Grid columns={[1, '3fr 2fr 2fr']}>
          <Box>
            <Booking />
          </Box>

          <Flex sx={{ flexDirection: 'column', gap: 1 }}>
            <Link
              href={'tel:+4722120512'}
              sx={{ textDecoration: 'none', color: 'background' }}
            >
              +47 22 12 05 12
            </Link>
            <Link
              href={'mailto:kontoret@bjerk.io'}
              sx={{ textDecoration: 'none', color: 'background' }}
            >
              kontoret@bjerk.io
            </Link>
          </Flex>
          <Flex sx={{ flexDirection: 'column', gap: 1 }}>
            <Text>Myntgata 2</Text>
            <Text>0150 Oslo</Text>
          </Flex>
        </Grid>
        <Flex sx={{ alignItems: 'center' }}>
          <Text sx={{ mr: 'auto' }}>2022 Bjerk. 998 732 867 MVA</Text>
          <NetworksLinks />
        </Flex>
      </Flex>
    </Container>
  </Box>
);
