import { createContext } from "react";
import { CaseTypes } from "../../customTypes";

const CaseContext = createContext<CaseTypes>({
  caseStudy: 0,
});

export default CaseContext;
