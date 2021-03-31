import { Box, BoxProps, Flex } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  display: ['none', 'none', 'block'],
  width: '100%',
  zIndex: 100,
  '.navbar': {
    bg: 'transparent',
  },
  '.container': {
    alignItems: 'center',
    maxWidth: '1920px',
    margin: '0 auto',
    py: '25px',
    px: [4, 4, 6],
  },
  '.navbar.active': {
    bg: 'background',
  },
  '.navbarWhite': {
    bg: 'white',
  },
  '.linksContainer': {
    flexGrow: 1,
    fontSize: 23,
    fontWeight: 600,
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
    marginLeft: '64px',
  },
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Navbar: React.FC<BoxProps> = () => {
  const { t } = useTranslation();
  const [navbar, setNavbar] = useState(false);
  const [pathname, setPathname] = useState('');

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 70) {
      setNavbar(true);
    } else if (['', '/en'].includes(pathname)) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    setPathname(
      window.location.pathname[window.location.pathname.length - 1] === '/'
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname,
    );
    if (pathname !== '') setNavbar(true);
    else window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Box sx={styles}>
      <Box
        className={
          !['', '/en'].includes(pathname)
            ? 'navbarWhite'
            : navbar
            ? 'navbar active'
            : 'navbar'
        }
      >
        <Flex className="container">
          <Link to="/" className="logo-link">
            {!navbar && ['', '/en'].includes(pathname) ? (
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
              className="link"
              style={{
                color: pathname.includes('/services')
                  ? 'lightGreen'
                  : ['', '/en'].includes(pathname) && !navbar
                  ? 'white'
                  : 'black',
              }}
              to="/services"
            >
              {t('header:services')}
            </Link>
            <Link
              className="link"
              style={{
                color: pathname.includes('/about')
                  ? 'lightGreen'
                  : ['', '/en'].includes(pathname) && !navbar
                  ? 'white'
                  : 'black',
              }}
              to="/about"
            >
              {t('header:about-us')}
            </Link>
            <Link
              className="link"
              style={{
                color: pathname.includes('/contact')
                  ? 'lightGreen'
                  : ['', '/en'].includes(pathname) && !navbar
                  ? 'white'
                  : 'black',
              }}
              to="/contact"
            >
              {t('header:contact')}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
