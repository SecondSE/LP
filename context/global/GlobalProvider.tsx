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
      secCount: 0,
      memoInitDevice: () => {},
      memoActivateAnim: () => {},
      memoChangeSection: () => {},
      memoChangeDevice: () => {},
    }
  );

  const memoInitDevice = useMemo(() => initDevice, []);

  const memoChangeDevice = useMemo(() => changeDevice, []);

  const memoChangeSection = useMemo(() => changeSection, []);

  const memoActivateAnim = useMemo(() => activateAnim, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        memoInitDevice,
        memoActivateAnim,
        memoChangeSection,
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

  function changeSection(section: number) {
    return dispatch({
      type: "CHANGE_SECTION",
      data: section,
    });
  }

  function activateAnim(section: number) {
    return dispatch({
      type: "ACTIVATE_ANIM",
      data: section,
    });
  }
};

export default GlobalProvider;
