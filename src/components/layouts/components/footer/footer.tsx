/** @jsx */
import React from 'react';
import { Box, Container, Grid, Link, Text } from 'theme-ui';
import { Text as FormattedText } from '../../../text';
import { Logo } from '../logo';
import { NetworksLinks } from './networks-links';

const Footer: React.FC = () => (
  <Box sx={{ bg: 'dark', color: 'white' }}>
    <Container variant="centered" sx={{ py: 4, pt: 6 }}>
      <Box>
        <Logo color="white" sx={{ width: '4em' }} />
      </Box>
      <Grid gap={[1, 1, 6]} columns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}>
        <FormattedText
          sx={{ fontSize: 5, my: 4, lineHeight: '40px', fontWeight: 700 }}
          id="footer-greeting"
          defaultMessage="We would love to work with you!"
        />
        <Box sx={{ fontSize: 5, my: 4, marginLeft: [0, 0, '40%', '40%'] }}>
          <Link href="tel:+4722120512" sx={{ whiteSpace: 'nowrap' }}>
            +47 22 12 05 12
          </Link>
          <br />
          <Link href="mailto:kontoret@bjerk.io">kontoret@bjerk.io</Link>
        </Box>
        <Text sx={{ fontSize: 5, my: [0, 4, 4] }}>
          Frognerveien 1B
          <br />
          0257 Oslo
        </Text>
      </Grid>
      <Grid
        sx={{
          display: 'grid',
          gridGap: 3,
          alignItems: 'start',
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
          pt: '4rem',
        }}
      >
        <Text sx={{ flex: 1, fontSize: 20, whiteSpace: 'pre' }}>
          <FormattedText
            id="copyright"
            defaultMessage="2021 Bjerk. All rights reserved."
          />{' '}
          998 732 867 MVA
        </Text>
        <NetworksLinks />
      </Grid>
    </Container>
  </Box>
);

export default Footer;
