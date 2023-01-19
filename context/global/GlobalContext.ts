import { createContext } from "react";
import { AppType } from "../../customTypes";

export const GlobalContext = createContext<AppType>({
  device: "",
  init: true,
  secCount: 0,
  memoInitDevice: () => {},
  memoChangeDevice: () => {},
  memoChangeSection: () => {},
  memoActivateAnim: () => {},
});

export default GlobalContext;
