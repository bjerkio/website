/** @jsx */
import { Box, Flex } from '@theme-ui/components';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../logo';
import Hamburger from './hamburger';
import MobileMenu from './mobile-menu';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Flex
        sx={{
          margin: '0 auto',
          maxWidth: '1520px',
          py: 4,
          px: 3,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/">
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
            <Link to="/services">{t('header:services')}</Link>
            <Link to="/about">{t('header:about-us')}</Link>
            <Link to="/contact">{t('header:contact')}</Link>
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
    </React.Fragment>
  );
};

export default Header;
