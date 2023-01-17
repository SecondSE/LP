import { useEffect, useContext } from "react";
import debounce from "lodash.debounce";

import GlobalContext from "../context/global/GlobalContext";

const useResize = function () {
  const globalContext = useContext(GlobalContext);

  const { device, memoChangeDevice } = globalContext;

  useEffect(() => {
    function resizeEvent(event: Event) {
      if (document.body.clientWidth < 1200) {
        memoChangeDevice("mobile");
      } else {
        memoChangeDevice("desktop");
      }
    }

    window.addEventListener("resize", debounce(resizeEvent, 500));

    return () => {
      window.removeEventListener("resize", debounce(resizeEvent, 500));
    };
  }, [memoChangeDevice]);
};

export default useResize;
