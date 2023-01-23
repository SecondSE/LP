import typography from "./typography";
import colors from "./colors";
import { DefaultTheme } from "styled-components";
import funcs from "./funcs";

export const defaultTheme: DefaultTheme = {
  ...typography,
  ...colors,
  ...funcs,
};
