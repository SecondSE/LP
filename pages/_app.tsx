import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useLoad from "../hooks/useLoad";
import useScroll from "../hooks/useScroll";
import { defaultTheme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  useLoad();
  useScroll();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
