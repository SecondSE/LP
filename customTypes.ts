export interface CaseTypes {
  caseStudy: number;
  init: boolean;
  setActive?: (ind: number) => void;
  changeActive?: (curr: number) => void;
}

export interface Action {
  type: string;
  data: any;
}

export type CaseReducer<S, A> = (prevState: S, action: A) => CaseTypes;
