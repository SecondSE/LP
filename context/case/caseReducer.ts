import { Action, CaseTypes } from "../../customTypes";
import { ACTIVE_IND } from "./types";

function caseReducer(state: CaseTypes, { type, data }: Action): CaseTypes {
  switch (type) {
    case ACTIVE_IND:
      return {
        ...state,
        ...data,
      };

    default:
      return {
        ...state,
      };
  }
}

export default caseReducer;
