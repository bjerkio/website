import React from 'react';
import { IntlProvider } from 'react-intl';
import { GlobalStyles } from '../../gatsby-plugin-theme-ui/global-styles';
// import BottomTree from './components/bottom-tree/bottom-tree';
// import ContactFooter from './components/contact-footer/contact-footer';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export const Layout: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="en">
      <GlobalStyles />
      <Header />
      {children}
      {/* <BottomTree /> */}
      {/* <ContactFooter /> */}
      <Footer />
    </IntlProvider>
  );
};

export default Layout;
