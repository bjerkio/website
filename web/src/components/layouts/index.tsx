import React from 'react';
import { Box } from 'theme-ui';
import { GlobalStyles } from '../../theme/global-styles';
import ContactFooter from './components/contact-footer/contact-footer';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';
import MobileHeader from './components/header/mobile-header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div style={{ height: '60px' }} />
      <Header sx={{ position: 'sticky', top: 0 }} />
      <MobileHeader />
      <Box>{children}</Box>
      <ContactFooter />
      <Footer />
    </>
  );
};
