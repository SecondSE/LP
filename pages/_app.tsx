import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalProvider from "../context/global/GlobalProvider";
import { defaultTheme } from "../utils/theme";
import FocusGrotesk from "@next/font/local";
const mainFont = FocusGrotesk({
  src: "../assets/fonts/FocusGrotesk-Light.woff",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalProvider>
        <div className={mainFont.className}>
          <Component {...pageProps} />
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}
