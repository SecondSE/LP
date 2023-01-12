import { useState } from "react";
import {
  SCarouselSlide,
  SCarouselSlides,
  SCarouselWrapper,
} from "../styles/Carousel";

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  // if useState is 0, activeSlide is [0] and Case is also [0]. then onClick on activeSlide[0] shows Case[0]
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(dir: string) {
    let sum;
    if (dir === "r") {
      sum = currentSlide + 1;
    } else {
      sum = currentSlide - 1;
    }

    if (sum === children.length) {
      return setCurrentSlide(0);
    }

    if (sum === -1) {
      return setCurrentSlide(children.length - 1);
    }
    return setCurrentSlide(sum);
  }

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));
  return (
    <>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
        <button onClick={() => handleClick("l")}>Left</button>
        <button onClick={() => handleClick("r")}>Right</button>
      </SCarouselWrapper>
    </>
  );
};

export default Carousel;
