import { Action, AppType } from "../../customTypes";
import { ACTIVATE_ANIM, CHANGE_DEVICE, INIT_DEVICE } from "./types";

const globalReducer = function (prevState: AppType, { type, data }: Action) {
  switch (type) {
    case INIT_DEVICE:
      return {
        ...prevState,
        device: data,
        init: false,
      };
    case ACTIVATE_ANIM:
      return {
        ...prevState,
        [data]: true,
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

    default:
      return {
        ...prevState,
      };
  }
};

export default globalReducer;
