import { useContext, useEffect } from "react";
import GlobalContext from "../context/global/GlobalContext";

const useScroll = function () {
  const globalContext = useContext(GlobalContext);

  const { section1, section2, section3, section4 } = globalContext;

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  function scrollEvent(event: Event) {
    console.log("");
  }
};

export default useScroll;
