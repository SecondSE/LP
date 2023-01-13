import { Action, CaseTypes } from "../../customTypes";
import { ACTIVE_IND } from "./types";

function caseReducer(prevState: CaseTypes, { type, data }: Action): CaseTypes {
  switch (type) {
    case ACTIVE_IND:
      return {
        ...prevState,
        caseStudy: data,
        init: true,
      };

    default:
      return {
        ...prevState,
      };
  }
}

export default caseReducer;
