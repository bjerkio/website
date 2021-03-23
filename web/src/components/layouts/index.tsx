import React from 'react';
import { Box } from 'theme-ui';
import { GlobalStyles } from '../../theme/global-styles';
import ContactFooter from './components/contact-footer/contact-footer';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box>{children}</Box>
      <ContactFooter />
      <Footer />
    </>
  );
};
