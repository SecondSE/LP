import { Action, AppType } from "../../customTypes";
import {
  ACTIVATE_ANIM,
  CHANGE_DEVICE,
  CHANGE_SECTION,
  INIT_DEVICE,
} from "./types";

const globalReducer = function (prevState: AppType, { type, data }: Action) {
  switch (type) {
    case INIT_DEVICE:
      return {
        ...prevState,
        device: data,
        init: false,
      };
    case CHANGE_DEVICE:
      if (prevState.init) {
        return {
          ...prevState,
        };
      }
      return {
        ...prevState,
        device: data,
      };
    case CHANGE_SECTION:
      return {
        ...prevState,
        secCount: data,
      };
    case ACTIVATE_ANIM:
      return {
        ...prevState,
        secCount: data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default globalReducer;
