import React from 'react';
import { Box } from 'theme-ui';
import { GlobalStyles } from '../../theme/global-styles';
import { Footer } from './components/footer';
import Header from './components/header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
