/** @jsx */
import { Box } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import Navbar from './navbar';
import NavbarMobile from './navbar-mobile';

const styles: SystemStyleObject = {
  '.navbarMobile': {
    display: ['block', 'block', 'none'],
  },
  '.navbar': {
    display: ['none', 'none', 'block'],
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
