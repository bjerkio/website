import { Box } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import NavbarMobile from './navbar-mobile';

const styles: SystemStyleObject = {
  //   '.navbarMobile': {
  display: ['block', 'block', 'none'],
  //   },
};

const MobileHeader: React.FC = () => {
  return (
    <Box sx={styles}>
      <NavbarMobile className="navbarMobile" />
    </Box>
  );
};

export default MobileHeader;
