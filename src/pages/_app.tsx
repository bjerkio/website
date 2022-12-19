import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { theme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
