import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Themed } from 'theme-ui';
import { GlobalStyles } from '../components/global-styles';
import { theme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Themed.root>
      <Component {...pageProps} />
    </Themed.root>
  </ThemeProvider>
);

export default App;
