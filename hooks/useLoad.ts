import { useEffect } from "react";

const useLoad = function () {
  useEffect(() => {
    window.addEventListener("load", loadEvent);
    return () => {
      window.removeEventListener("load", loadEvent);
    };
  }, []);

  function loadEvent(event: Event) {
    console.log(event);
  }
};

export default useLoad;
