export interface CaseTypes {
  case: number;
}

export interface Action {
  type: string;
  data: any;
}

export type CaseReducer<S, A> = (prevState: S, action: A) => CaseTypes;
