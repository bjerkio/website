import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Themed } from 'theme-ui';
import { GlobalStyles } from '../components/global-styles';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react'

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
import type { NextComponentType, NextPageContext } from "next";
import type { NextRouter } from "next/router";

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
