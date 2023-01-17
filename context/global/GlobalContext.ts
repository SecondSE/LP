import { createContext } from "react";
import { AppType } from "../../customTypes";

export const GlobalContext = createContext<AppType>({
  device: "",
  section1: true,
  section2: false,
  section3: false,
  section4: false,
});

export default GlobalContext;
