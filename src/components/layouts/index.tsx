import React from 'react';
import { GlobalStyles } from '../../theme/global-styles';
import BottomTree from './components/bottom-tree/bottom-tree';
// import ContactFooter from './components/contact-footer/contact-footer';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <BottomTree />
      {/* <ContactFooter /> */}
      <Footer />
    </>
  );
};

export default Layout;
