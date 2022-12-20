import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
              href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
