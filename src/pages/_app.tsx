import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import { Themed } from 'theme-ui';
import GlobalStyles from '../components/global-styles';

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

export default App;
