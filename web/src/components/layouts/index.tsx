import React from 'react';
import { Box } from 'theme-ui';
import { GlobalStyles } from '../../theme/global-styles';
import { Footer } from './components/footer/footer';
import Header from './components/header/header';
import SayHiFooter from './components/say-hi-footer/say-hi-footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box>{children}</Box>
      <SayHiFooter />
      <Footer />
    </>
  );
};
