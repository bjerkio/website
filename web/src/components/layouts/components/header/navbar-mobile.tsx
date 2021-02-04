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
    margin: 4,
  },
  '.menuButton': {
    display: 'flex',
    alignItems: 'center',
    background: 'primary',
    borderRadius: '50%',
    position: 'fixed',
    zIndex: 3,
    width: '4em',
    height: '4em',
    color: 'black',
    margin: 4,
    right: 0,
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
            <Logo sx={{ width: ['4em', '5em', '6em'], color: 'white' }} />
          ) : (
            <Logo
              dotColor="#0FCFA2"
              sx={{ color: 'black', width: ['4em', '5em', '6em'] }}
            />
          )}
        </Link>
      </Box>
      <Button
        className={menu ? 'menuButton open' : 'menuButton'}
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <IoCloseSharp fontSize={'3em'} />
        ) : (
          <GiHamburgerMenu fontSize={'3em'} />
        )}
      </Button>
      {menu && <MobileMenu />}
    </Box>
  );
};

export default NavbarMobile;
