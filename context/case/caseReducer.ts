import { Action, CaseTypes } from "../../customTypes";
import { ACTIVE_IND, CHANGE_SLIDE } from "./types";

function caseReducer(prevState: CaseTypes, { type, data }: Action): CaseTypes {
  switch (type) {
    case ACTIVE_IND:
      return {
        ...prevState,
        caseStudy: data,
        init: true,
      };
    case CHANGE_SLIDE:
      return {
        ...prevState,
        caseStudy: data,
      };

    default:
      return {
        ...prevState,
      };
  }
}

export default caseReducer;
