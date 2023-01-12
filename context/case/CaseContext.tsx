import { createContext } from "react";
import { CaseTypes } from "../../customTypes";

const CaseContext = createContext<CaseTypes>({
  case: 0,
});

export default CaseContext;
