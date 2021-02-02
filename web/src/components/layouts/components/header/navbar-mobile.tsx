import { Box, BoxProps, Button, Link } from '@theme-ui/components';
import React, { useState } from 'react';
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
    margin: '36px',
  },
  '.menuButton': {
    display: 'flex',
    alignItems: 'center',
    background: 'primary',
    borderRadius: '50%',
    position: 'fixed',
    zIndex: 3,
    width: '50px',
    height: '50px',
    color: 'black',
    margin: '36px',
    right: 0,
    padding: '10px',
  },
  '.menuButton.open': {
    background: 'white',
  },
};

const NavbarMobile: React.FC<BoxProps> = ({ ...props }) => {
  let pathname = '';

  if (typeof window !== 'undefined') {
    pathname =
      window.location.pathname[window.location.pathname.length - 1] === '/'
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname;
  }

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <Box {...props} sx={styles}>
      <Box className="logo">
        <Link href="/">
          {pathname === '' ? (
            <Logo sx={{ width: '70px', color: 'white' }} />
          ) : (
            <Logo dotColor="#0FCFA2" sx={{ color: 'black', width: '70px' }} />
          )}
        </Link>
      </Box>
      <Button
        className={menu ? 'menuButton open' : 'menuButton'}
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <IoCloseSharp fontSize={'30px'} />
        ) : (
          <GiHamburgerMenu fontSize={'30px'} />
        )}
      </Button>
      {menu && <MobileMenu />}
    </Box>
  );
};

export default NavbarMobile;
