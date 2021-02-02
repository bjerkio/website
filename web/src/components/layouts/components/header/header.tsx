/** @jsx */
import { Box } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import Navbar from './navbar';
import NavbarMobile from './navbar-mobile';

const styles: SystemStyleObject = {
  '.navbarMobile': {
    display: 'none',
  },
  ['@media screen and (max-width: 960px)']: {
    '.navbarMobile': {
      display: 'block',
    },
    '.navbar': {
      display: 'none',
    },
  },
};

const Header: React.FC = () => {
  return (
    <Box sx={styles}>
      <Navbar className="navbar" />
      <NavbarMobile className="navbarMobile" />
    </Box>
  );
};

export default Header;
