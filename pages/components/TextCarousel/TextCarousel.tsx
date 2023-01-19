import { useState, useCallback, useEffect, useRef } from "react";
import testimonials from "./testimonials";
import {
  StyledPerson,
  StyledTest,
  StyledQuoteDiv,
} from "../styles/ClientHistory.styled";

export default function TextCarousel() {
  const [counter, setCounter] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
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
      setFadeProp({ fade: "fade-out" });
      setTimeout(() => {
        savedCallBack.current();
      }, 1000);
      setTimeout(() => {
        setFadeProp({ fade: "fade-in" });
      }, 1000);
    }
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledQuoteDiv className={fadeProp.fade}>
      <StyledTest>{testimonials[counter].statement}</StyledTest>
      <StyledPerson>{testimonials[counter].person}</StyledPerson>
    </StyledQuoteDiv>
  );
}
