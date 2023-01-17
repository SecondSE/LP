import { useState, useCallback, useEffect, useRef } from "react";
import testimonials from "./testimonials";
import { StyledP, StyledSpan } from "../styles/ClientHistory.styled";

export default function TextCarousel() {
  const [counter, setCounter] = useState(0);
  const savedCallBack = useRef<() => void>(() => {});

  function callback() {
    let sum = counter + 1;
    if (sum < 3) {
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

    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <StyledP>{testimonials[counter].statement}</StyledP>
      <StyledSpan>{testimonials[counter].person}</StyledSpan>
    </>
  );
}
