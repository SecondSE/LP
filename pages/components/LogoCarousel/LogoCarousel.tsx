import { useState, useCallback, useEffect, useRef } from "react";
import carouselLogos from "./carouselLogos";
import {
  StyledCarouselLogoDiv,
  StyledCarouselLogo,
} from "../styles/ClientHistory.styled";

export default function TextCarousel() {
  const [counter, setCounter] = useState(0);
  const savedCallBack = useRef<() => void>(() => {});

  function callback() {
    let sum = counter + 1;
    if (sum < carouselLogos.length) {
      setCounter(sum);
    } else {
      setCounter(0);
    }
  }

  const callbackCB = useCallback(callback, [counter]);

  useEffect(() => {
    savedCallBack.current = callbackCB;
  }, [savedCallBack, callbackCB]);

  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }

    const id = setInterval(tick, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledCarouselLogoDiv>
      <StyledCarouselLogo src={carouselLogos[counter].img} alt="Brand Logo" />
    </StyledCarouselLogoDiv>
  );
}
