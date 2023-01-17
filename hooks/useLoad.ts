import { useEffect, useContext, useMemo } from "react";
import debounce from "lodash.debounce";

import GlobalContext from "../context/global/GlobalContext";

const useLoad = function () {
  const globalContext = useContext(GlobalContext);

  const { memoInitDevice } = globalContext;

  useEffect(() => {
    window.addEventListener("load", loadEvent);

    if (document.body.clientWidth < 1200) {
      memoInitDevice("mobile");
    } else {
      memoInitDevice("desktop");
    }

    return () => {
      window.removeEventListener("load", loadEvent);
    };

    function loadEvent(event: Event) {
      if (document.body.clientWidth < 1200) {
        memoInitDevice("mobile");
      }
    }
  }, [memoInitDevice]);
};

export default useLoad;
