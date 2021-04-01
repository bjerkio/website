import React from 'react';
import { Box } from 'theme-ui';
import { GlobalStyles } from '../../theme/global-styles';
import BottomTree from './components/bottom-tree/bottom-tree';
// import ContactFooter from './components/contact-footer/contact-footer';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MobileHeader from './components/header/mobile-header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Box sx={{ height: [0, 0, '60px'] }} />
      <Header sx={{ position: 'sticky', top: 0, zIndex: 100 }} />
      <MobileHeader />
      <Box sx={{ marginTop: [0, 0, '-160px'] }}>{children}</Box>
      <BottomTree />
      {/* <ContactFooter /> */}
      <Footer />
    </>
  );
};
