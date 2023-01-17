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
      const heroElem = document.getElementById("sec-hero");
      const serviceElem = document.getElementById("sec-services");
      const workElem = document.getElementById("sec-work");
      const aboutElem = document.getElementById("sec-about");
      const contactElem = document.getElementById("sec-contact");

      if (!heroElem) return;
      if (!serviceElem) return;
      if (!workElem) return;
      if (!aboutElem) return;
      if (!contactElem) return;

      if (
        window.scrollY >= heroElem.offsetTop &&
        window.scrollY < serviceElem.offsetTop
      ) {
        memoActivateAnim("section1");
      } else if (
        window.scrollY >= serviceElem.offsetTop &&
        window.scrollY < workElem.offsetTop
      ) {
        memoActivateAnim("section2");
      } else if (
        window.scrollY >= workElem.offsetTop &&
        window.scrollY < aboutElem.offsetTop
      ) {
        memoActivateAnim("section3");
      } else if (
        window.scrollY >= aboutElem.offsetTop &&
        window.scrollY < contactElem.offsetTop
      ) {
        memoActivateAnim("section4");
      } else if (window.scrollY > contactElem.offsetTop) {
        memoActivateAnim("section5");
      }
    }
  }, [memoActivateAnim]);
};

export default useScroll;
