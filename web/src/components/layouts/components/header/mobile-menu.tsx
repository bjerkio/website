import { Box, BoxProps, Flex, Link } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  backgroundColor: 'primary',
  pb: 4,
  a: {
    color: 'black',
    ml: 5,
    mb: 4,
    borderBottom: '0.19rem solid',
    fontSize: 4,
  },
};

const MobileMenu: React.FC<BoxProps> = ({ ...props }) => (
  <Box sx={styles} {...props}>
    <Flex sx={{ flexDirection: 'column' }}>
      <Logo
        dotColor="white"
        sx={{ color: 'black', width: ['4em', '5em', '6em'], mb: 5, ml: 5 }}
      />
      <Link variant="nav" href="/services">
        Tjenester
      </Link>
      <Link variant="nav" href="/about">
        Om oss
      </Link>
      <Link variant="nav" href="/contact">
        Kontakt oss
      </Link>
    </Flex>
  </Box>
);

export default MobileMenu;
