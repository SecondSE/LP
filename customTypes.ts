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
  secCount: number;
  memoInitDevice: InitFunc | ArgString;
  memoChangeDevice: InitFunc | ArgString;
  memoChangeSection: InitFunc | ArgNumber;
  memoActivateAnim: InitFunc | ArgNumber;
  dispatch?: ContextDispatch;
}

type InitFunc = () => void;
export type ArgString = (arg: string) => void;
export type ArgNumber = (arg: number) => void;

type ContextDispatch = Dispatch<Action>;

export interface Action {
  type: string;
  data?: any;
}

export type Reducer<S, A> = (prevState: S, action: A) => S;
