import { Box, BoxProps, Button } from '@theme-ui/components';
import { Link } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';
import MobileMenu from './mobile-menu';

const styles: SystemStyleObject = {
  width: '100%',
  bg: 'transparent',
  '.logo': {
    position: 'absolute',
    margin: 4,
    marginTop: '45px',
  },
  '.menuButton': {
    display: 'flex',
    alignItems: 'center',
    background: 'primary',
    borderRadius: '50%',
    position: 'fixed',
    zIndex: 2,
    width: '42px',
    height: '42px',
    color: 'black',
    margin: 4,
    right: 0,
    fontSize: '100px',
    padding: 0,
    '.container': {
      display: 'inline-block',
      cursor: 'pointer',
      marginLeft: '9px',
      '.bar1': {
        width: '24px',
        height: '3px',
        backgroundColor: '#232931',
        margin: '3px 0',
        transition: '.4s',
        '&.animate': {
          '-webkit-transform': 'rotate(-45deg) translate(-1px, 3px)',
          transform: 'rotate(-45deg) translate(-5px, 4px)',
        },
      },
      '.bar2': {
        width: '24px',
        height: '3px',
        backgroundColor: '#232931',
        margin: '3px 0',
        transition: '.4s',
        '&.animate': {
          opacity: 0,
        },
      },
      '.bar3': {
        width: '24px',
        height: '3px',
        backgroundColor: '#232931',
        margin: '3px 0',
        transition: '.4s',
        '&.animate': {
          '-webkit-transform': 'rotate(45deg) translate(-6px, -7px)',
          transform: 'rotate(45deg) translate(-4px, -4px);',
        },
      },
    },
  },
  '.menuButton.open': {
    background: 'white',
  },
};

const NavbarMobile: React.FC<BoxProps> = ({ ...props }) => {
  const [pathname, setPathname] = useState('');
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    setPathname(
      window.location.pathname[window.location.pathname.length - 1] === '/'
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname,
    );
  }, []);

  return (
    <Box {...props} sx={styles}>
      <Box className="logo">
        <Link to="/">
          {pathname === '' ? (
            <Logo color="white" sx={{ width: '5em', color: 'white' }} />
          ) : (
            <Logo
              color="black"
              dotColor="#0FCFA2"
              sx={{ color: 'black', width: '5em' }}
            />
          )}
        </Link>
      </Box>
      <Button
        className={menu ? 'menuButton open' : 'menuButton'}
        onClick={() => setMenu(!menu)}
      >
        <div className="container">
          <div className={menu ? 'bar1 animate' : 'bar1'}></div>
          <div className={menu ? 'bar2 animate' : 'bar2'}></div>
          <div className={menu ? 'bar3 animate' : 'bar3'}></div>
        </div>
      </Button>
      {menu && <MobileMenu />}
    </Box>
  );
};

export default NavbarMobile;
