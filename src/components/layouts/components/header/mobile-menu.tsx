import { Box, BoxProps, Flex } from '@theme-ui/components';
import { Link, graphql } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  zIndex: 1000,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  bg: 'primary',
  pb: 4,
  a: {
    color: 'black',
    ml: 5,
    mr: 0,
    mb: 3,
    width: 'auto',
    fontSize: 4,
    lineHeight: 1,
    textDecorationLine: 'underline',
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
      <Link to="/services">
        <FormattedMessage id="nav-services" defaultMessage="Services" />
      </Link>
      <Link to="/about">
        <FormattedMessage id="nav-about" defaultMessage="About" />
      </Link>
      <Link to="/contact">
        <FormattedMessage id="nav-contact" defaultMessage="Contact" />
      </Link>
    </Flex>
  </Box>
);

export default MobileMenu;
