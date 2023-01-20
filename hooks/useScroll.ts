import { useContext, useEffect } from "react";
import debounce from "lodash.debounce";

import GlobalContext from "../context/global/GlobalContext";

const useScroll = function () {
  const globalContext = useContext(GlobalContext);

  const { secCount, memoChangeSection, memoActivateAnim } = globalContext;

  useEffect(() => {
    const debouncer = debounce(scrollEvent, 100);

    window.addEventListener("scroll", debouncer);

    return () => {
      window.removeEventListener("scroll", debouncer);
    };
    function scrollEvent(event: Event) {
      const sections = document.querySelectorAll<HTMLElement>(
        "section[id^='sec-']"
      );
      sections.forEach((node, idx) => {
        if (isInViewport(node, idx)) {
          if (idx === 0) return;
          memoActivateAnim(secCount + 1);
        }
      });
      function isInViewport(element: HTMLElement, indx: number) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 0 && secCount <= indx;
        // return false;
      }
    }
  }, [memoChangeSection, memoActivateAnim, secCount]);
};

export default useScroll;
