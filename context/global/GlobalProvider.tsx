import { useReducer, useCallback, useMemo } from "react";

import { Reducer, AppType, Action } from "../../customTypes";
import GlobalContext from "./GlobalContext";
import globalReducer from "./globalReducer";

interface ProviderProps {
  children: JSX.Element;
}

const GlobalProvider: React.FC<ProviderProps> = function ({ children }) {
  const [state, dispatch] = useReducer<Reducer<AppType, Action>>(
    globalReducer,
    {
      device: "",
      init: true,
      section1: true,
      section2: false,
      section3: false,
      section4: false,
      memoInitDevice: () => {},
      memoActivateAnim: () => {},
      memoChangeDevice: () => {},
    }
  );

  const memoActivateAnim = useMemo(() => activateAnim, []);

  const memoInitDevice = useMemo(() => initDevice, []);

  const memoChangeDevice = useMemo(() => changeDevice, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        memoInitDevice,
        memoActivateAnim,
        memoChangeDevice,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );

  function initDevice(device: string) {
    return dispatch({
      type: "INIT_DEVICE",
      data: device,
    });
  }

  function changeDevice(device: string) {
    return dispatch({
      type: "CHANGE_DEVICE",
      data: device,
    });
  }

  function activateAnim(section: string) {
    if (section === "section1") {
      return dispatch({
        type: "ACTIVATE_ANIM",
        data: "section1",
      });
    }

    if (section === "section2") {
      return dispatch({
        type: "ACTIVATE_ANIM",
        data: "section2",
      });
    }

    if (section === "section3") {
      return dispatch({
        type: "ACTIVATE_ANIM",
        data: "section3",
      });
    }
  }
};

export default GlobalProvider;
