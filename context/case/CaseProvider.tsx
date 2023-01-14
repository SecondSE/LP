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
      caseStudy: 0,
      init: false,
    }
  );

  function setActive(ind: number) {
    return dispatch({
      type: "ACTIVE_IND",
      data: ind,
    });
  }

  function changeActive(curr: number) {
    return dispatch({
      type: "CHANGE_SLIDE",
      data: curr,
    });
  }

  return (
    <CaseContext.Provider
      value={{
        ...state,
        setActive: setActive,
        changeActive: changeActive,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export default CaseProvider;
