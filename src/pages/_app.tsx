import type { AppProps } from 'next/app';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import React from 'react';

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
