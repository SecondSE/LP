import { Action, AppType } from "../../customTypes";
import { ACTIVATE_ANIM, INIT_DEVICE } from "./types";

const globalReducer = function (prevState: AppType, { type, data }: Action) {
  switch (type) {
    case INIT_DEVICE:
      return {
        ...prevState,
        device: data,
      };
    case ACTIVATE_ANIM:
      return {
        ...prevState,
        [data]: true,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default globalReducer;
