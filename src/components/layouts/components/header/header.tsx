/** @jsx */
import { Box, Container, Flex } from '@theme-ui/components';
import React, { useState } from 'react';
import { Link } from '../../../link';
import { Text } from '../../../text';
import { Logo } from '../logo';
import Hamburger from './hamburger';
import MobileMenu from './mobile-menu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Container variant="centered" sx={{ my: 4 }}>
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/" aria-label="Bjerk Logo">
            <Logo
              color="black"
              dotColor="primary"
              sx={{
                alignItems: 'flex-start',
                color: 'black',
                width: '5em',
              }}
            />
          </Link>

          <Box
            sx={{
              display: ['block', 'none'],
              position: ['fixed', 'static'],
              top: 0,
              right: 0,
              zIndex: 1001,
            }}
          >
            <Hamburger isOpen={isOpen} onClick={setIsOpen} />
          </Box>

          <Box
            sx={{ display: ['none', 'block'] }}
            onClick={() => setIsOpen(false)}
          >
            <Flex as="nav" variant="nav">
              <Link to="/services">
                <Text id="nav-services" defaultMessage="Services" />
              </Link>
              <Link to="/about">
                <Text id="nav-about" defaultMessage="About" />
              </Link>
              <Link to="/contact">
                <Text id="nav-contact" defaultMessage="Contact" />
              </Link>
            </Flex>
          </Box>

          {isOpen && (
            <Box
              sx={{
                display: ['block', 'none'],
                position: 'fixed',
                top: 0,
                left: 0,
              }}
            >
              <MobileMenu />
            </Box>
          )}
        </Flex>
      </Container>
    </React.Fragment>
  );
};

export default Header;
