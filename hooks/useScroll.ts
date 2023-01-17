import { useContext, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

import GlobalContext from "../context/global/GlobalContext";

const useScroll = function () {
  const globalContext = useContext(GlobalContext);

  const { section1, section2, section3, section4, memoActivateAnim } =
    globalContext;

  useEffect(() => {
    window.addEventListener("scroll", debounce(scrollEvent, 500));

    return () => {
      window.removeEventListener("scroll", debounce(scrollEvent, 500));
    };
    function scrollEvent(event: Event) {
      console.log(window.scrollY);
    }
  }, [memoActivateAnim]);
};

export default useScroll;
