import "../../static/fonts/fonts.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { Themed } from "theme-ui";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Themed.root>
        <Component {...pageProps} />
      </Themed.root>
    </ThemeProvider>
  );
}

export default MyApp;
