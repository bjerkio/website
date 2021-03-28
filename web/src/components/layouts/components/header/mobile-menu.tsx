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
    mr: 0,
    mb: 3,
    width: 'auto',
    fontSize: 4,
    lineHeight: 1,
    textDecorationThickness: '3px',
  },
};

const MobileMenu: React.FC<BoxProps> = ({ ...props }) => (
  <Box sx={styles} {...props}>
    <Flex sx={{ flexDirection: 'column' }}>
      <Logo
        dotColor="white"
        sx={{ color: 'black', width: '5em', mb: 4, ml: 5 }}
      />
      <Link href="/services">Tjenester</Link>
      <Link href="/about">Om oss</Link>
      <Link href="/contact">Kontakt</Link>
    </Flex>
  </Box>
);

export default MobileMenu;
