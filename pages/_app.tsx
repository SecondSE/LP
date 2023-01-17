import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalProvider from "../context/global/GlobalProvider";
import { defaultTheme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}
