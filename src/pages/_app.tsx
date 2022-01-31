import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { theme } from '@bjerk/brand';
import { Themed } from 'theme-ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Themed.root>
        <Component {...pageProps} />
      </Themed.root>
    </ThemeProvider>
  );
}

export default App;
