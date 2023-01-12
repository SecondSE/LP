export interface CaseTypes {
  caseStudy: number;
  setActive?: (ind: number) => void;
}

export interface Action {
  type: string;
  data: any;
}

export type CaseReducer<S, A> = (prevState: S, action: A) => CaseTypes;
