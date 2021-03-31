/** @jsx */
import { Box } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import Navbar from './navbar';

const styles: SystemStyleObject = {
  '.navbarMobile': {
    display: ['block', 'block', 'none'],
  },
};

const Header: React.FC = ({ ...props }) => {
  return (
    <Box sx={styles} {...props}>
      <Navbar className="navbar" />
    </Box>
  );
};

export default Header;
