/** @jsx */
import { Box, Flex, Link } from '@theme-ui/components';
import React, { useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  '.navbar': {
    width: '100%',
    position: 'fixed',
    zIndex: 3,
    bg: 'transparent',
  },
  '.navbar.active': {
    bg: 'background',
  },
  '.link': {
    color: 'background',
    textDecoration: 'underline',
  },
  '.link:hover': {
    color: 'background',
  },
  '.link.active': {
    color: 'primary',
  },
  '.link.dark': {
    color: 'black',
  },
};

const Header: React.FC = () => {
  const pathname = `/${
    /[^/]*$/.exec(typeof window !== 'undefined' ? window.location.href : '')[0]
  }`;
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <Box sx={styles}>
      <Box className={navbar ? 'navbar active' : 'navbar'}>
        <Flex
          sx={{
            alignItems: 'center',
            p: 4,
            maxWidth: '1440px',
            margin: '0 auto',
            py: 4,
            px: '188px',
          }}
        >
          <Link href="/">
            {!navbar && pathname === '/' ? (
              <Logo sx={{ width: '70px', color: 'white' }} />
            ) : (
              <Logo dotColor="#0FCFA2" sx={{ color: 'black', width: '70px' }} />
            )}
          </Link>
          <Flex
            sx={{
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
                  color: 'secondary',
                  transition: 'color 0.2s',
                },
              },
            }}
          >
            <Link
              variant="nav"
              className={
                pathname === '/services'
                  ? 'link active'
                  : pathname === '/' && !navbar
                  ? 'link'
                  : 'link dark'
              }
              href="/services"
            >
              Tjenester
            </Link>
            <Link
              sx={{ ml: 5 }}
              variant="nav"
              className={
                pathname === '/about'
                  ? 'link active'
                  : pathname === '/' && !navbar
                  ? 'link'
                  : 'link dark'
              }
              href="/about"
            >
              Om oss
            </Link>
            <Link
              sx={{ ml: 5 }}
              variant="nav"
              className={
                pathname === '/contact'
                  ? 'link active'
                  : pathname === '/' && !navbar
                  ? 'link'
                  : 'link dark'
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

export default Header;
