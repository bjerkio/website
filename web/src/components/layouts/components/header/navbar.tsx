import { Box, BoxProps, Flex } from '@theme-ui/components';
import { Link } from 'gatsby-plugin-intl';
import React, { useEffect, useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import localizedText from '../../../../config/localized-text';
import { Logo } from '../logo';
import Language from './language';

const navbarLocalized = localizedText.navbar;

const styles: SystemStyleObject = {
  position: 'fixed',
  width: '100%',
  zIndex: 3,
  '.navbar': {
    bg: 'transparent',
  },
  '.container': {
    alignItems: 'center',
    maxWidth: '1920px',
    margin: '0 auto',
    py: 4,
    px: [5, 5, 6],
  },
  '.navbar.active': {
    bg: 'background',
  },
  '.linksContainer': {
    flexGrow: 1,
    fontSize: 3,
    color: 'iron',
    justifyContent: 'flex-end',
    '>a': {
      p: 4,
      '&:last-child': {
        pr: 0,
      },
      '&:hover': {
        transition: 'color 0.2s',
      },
    },
  },
  '.link': {
    color: 'background',
    textDecoration: 'underline',
  },
  '.link.active': {
    color: 'lightGreen',
  },
  '.link.dark': {
    color: 'black',
  },
};

const Navbar: React.FC<BoxProps> = ({ ...props }) => {
  let pathname = '';

  if (typeof window !== 'undefined') {
    pathname =
      window.location.pathname[window.location.pathname.length - 1] === '/'
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname;
  }

  const [navbar, setNavbar] = useState(false);

  const [loc, setLoc] = useState('no');
  useEffect(() => {
    setLoc(window.location.href.split('/')[3]);
  }, []);

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <Box sx={styles} {...props}>
      <Box className={navbar ? 'navbar active' : 'navbar'}>
        <Flex className="container">
          <Link to="/">
            {!navbar && pathname === '' ? (
              <Logo sx={{ width: '4em', color: 'white' }} />
            ) : (
              <Logo dotColor="#0FCFA2" sx={{ color: 'black', width: '4em' }} />
            )}
          </Link>
          <Language
            className={pathname === '' && !navbar ? 'link' : 'link dark'}
          />
          <Flex className="linksContainer">
            <Link
              className={
                pathname === '/services'
                  ? 'link active'
                  : pathname === '' && !navbar
                  ? 'link'
                  : 'link dark'
              }
              to="/services"
            >
              {navbarLocalized.services[loc]}
            </Link>
            <Link
              sx={{ ml: 5 }}
              className={
                pathname === '/about'
                  ? 'link active'
                  : pathname === '' && !navbar
                  ? 'link'
                  : 'link dark'
              }
              to="/about"
            >
              {navbarLocalized.aboutUs[loc]}
            </Link>
            <Link
              sx={{ ml: 5 }}
              className={
                pathname === '/contact'
                  ? 'link active'
                  : pathname === '' && !navbar
                  ? 'link'
                  : 'link dark'
              }
              to="/contact"
            >
              {navbarLocalized.contact[loc]}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
