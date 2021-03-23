import { Box, BoxProps, Flex, Link } from '@theme-ui/components';
import React, { useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  position: 'fixed',
  width: '100%',
  zIndex: 3,
  '.navbar': {
    bg: 'transparent',
  },
  '.container': {
    alignItems: 'center',
    maxWidth: '1440px',
    margin: '0 auto',
    py: '25px',
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
      p: 2,
      '&:last-child': {
        pr: 0,
      },
      '&:hover': {
        transition: 'color 0.2s',
      },
    },
  },
  '.logo-link': {
    marginTop: '0.4em',
  },
  '.link': {
    color: 'background',
    textDecoration: 'underline',
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

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined' && pathname === '') {
    window.addEventListener('scroll', changeBackground);
  }
  return (
    <Box sx={styles} {...props}>
      <Box className={navbar ? 'navbar active' : 'navbar'}>
        <Flex className="container">
          <Link href="/" className="logo-link">
            {!navbar && pathname === '' ? (
              <Logo color="white" sx={{ width: '6em', color: 'white' }} />
            ) : (
              <Logo
                dotColor="#0FCFA2"
                color="black"
                sx={{ width: '6em', color: 'black' }}
              />
            )}
          </Link>
          <Flex className="linksContainer">
            <Link
              color={
                pathname === '/services'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/services"
            >
              Tjenester
            </Link>
            <Link
              sx={{ ml: 5 }}
              color={
                pathname === '/about'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/about"
            >
              Om oss
            </Link>
            <Link
              sx={{ ml: 5 }}
              color={
                pathname === '/contact'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/contact"
            >
              Kontakt oss
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
