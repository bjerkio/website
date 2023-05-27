import { ChakraProvider } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import theme from '../theme';

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
