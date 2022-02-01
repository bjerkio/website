import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Themed } from 'theme-ui';
import GlobalStyles from '../components/global-styles';
import { theme } from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Themed.root>
        <Component {...pageProps} />
      </Themed.root>
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
