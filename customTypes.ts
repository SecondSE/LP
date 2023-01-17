import { Dispatch } from "react";

export interface CaseTypes {
  caseStudy: number;
  init: boolean;
  setActive?: (ind: number) => void;
  changeActive?: (curr: number) => void;
  dispatch?: ContextDispatch;
}

export interface AppType {
  device: string;
  section1: boolean;
  section2: boolean;
  section3: boolean;
  section4: boolean;
  initDevice?: (device: string) => void;
  activateAnim?: (section: string) => void;
  dispatch?: ContextDispatch;
}

type ContextDispatch = Dispatch<Action>;

export interface Action {
  type: string;
  data?: any;
}

export type Reducer<S, A> = (prevState: S, action: A) => S;
