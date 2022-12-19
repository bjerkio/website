import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../components/global-styles';
import { theme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
