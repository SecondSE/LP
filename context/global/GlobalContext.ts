import { createContext } from "react";
import { AppType } from "../../customTypes";

export const GlobalContext = createContext<AppType>({
  device: "",
  init: true,
  section1: true,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
  memoInitDevice: () => {},
  memoActivateAnim: () => {},
  memoChangeDevice: () => {},
});

export default GlobalContext;
