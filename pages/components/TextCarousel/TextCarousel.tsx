import { useState, useCallback, useEffect, useRef } from "react";
import testimonials from "./testimonials";
import {
  StyledPerson,
  StyledTest,
  StyledQuoteDiv,
} from "../styles/ClientHistory.styled";

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
    <StyledQuoteDiv>
      <StyledTest>{testimonials[counter].statement}</StyledTest>
      <StyledPerson>{testimonials[counter].person}</StyledPerson>
    </StyledQuoteDiv>
  );
}
