import React from "react";
import { IntlProvider } from "react-intl";
// import BottomTree from './components/bottom-tree/bottom-tree';
import { Booking } from "../booking";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export const Layout: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="en">
      <Header />
      {children}
      {/* <BottomTree /> */}
      <Booking />
      <Footer />
    </IntlProvider>
  );
};
