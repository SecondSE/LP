import { useContext, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

import GlobalContext from "../context/global/GlobalContext";

const useScroll = function () {
  const globalContext = useContext(GlobalContext);

  const { secCount, memoActivateAnim } = globalContext;
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
    function scrollEvent(event: Event) {
      const sections = document.querySelectorAll<HTMLElement>(
        "section[id^='sec-']"
      );
      sections.forEach((node, idx) => {
        if (isInViewport(node, idx)) {
          memoActivateAnim(idx);
        }
      });
      function isInViewport(element: HTMLElement, indx: number) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight;
      }
    }
  }, [memoActivateAnim, secCount]);
};

export default useScroll;
