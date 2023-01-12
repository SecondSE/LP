import { useReducer } from "react";
import CaseContext from "./CaseContext";
import { CaseTypes } from "../../customTypes";
import caseReducer from "./caseReducer";
import { CaseReducer, Action } from "../../customTypes";

interface ProviderProps {
  children: JSX.Element;
}

const CaseProvider = function ({ children }: ProviderProps) {
  const [state, dispatch] = useReducer<CaseReducer<CaseTypes, Action>>(
    caseReducer,
    {
      case: 0,
    }
  );

  return <CaseContext.Provider value={state}>{children}</CaseContext.Provider>;
};

export default CaseProvider;
