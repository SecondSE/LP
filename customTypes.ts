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
  init: boolean;
  section1: boolean;
  section2: boolean;
  section3: boolean;
  section4: boolean;
  section5: boolean;
  memoInitDevice: InitFunc | ArgString;
  memoActivateAnim: InitFunc | ArgString;
  memoChangeDevice: InitFunc | ArgString;
  dispatch?: ContextDispatch;
}

type InitFunc = () => void;
export type ArgString = (arg: string) => void;

type ContextDispatch = Dispatch<Action>;

export interface Action {
  type: string;
  data?: any;
}

export type Reducer<S, A> = (prevState: S, action: A) => S;
