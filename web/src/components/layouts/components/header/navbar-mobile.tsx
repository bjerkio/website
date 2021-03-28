import { Box, BoxProps, Button, Link } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
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
    width: '4em',
    height: '4em',
    maxWidth: '50px',
    maxHeight: '50px',
    color: 'black',
    margin: 4,
    right: 0,
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
        <Link href="/">
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
        {menu ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </Button>
      {menu && <MobileMenu />}
    </Box>
  );
};

export default NavbarMobile;
