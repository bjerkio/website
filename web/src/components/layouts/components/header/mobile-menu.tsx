import { Box, BoxProps, Flex } from '@theme-ui/components';
import { Link } from 'gatsby-plugin-intl';
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
        sx={{ color: 'black', width: '4em', mb: 5, ml: 5 }}
      />
      <Link to="/services">Tjenester</Link>
      <Link to="/about">Om oss</Link>
      <Link to="/contact">Kontakt oss</Link>
    </Flex>
  </Box>
);

export default MobileMenu;
