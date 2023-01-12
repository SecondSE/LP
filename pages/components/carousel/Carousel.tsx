import { useState } from "react";
import { SCarouselSlides, SCarouselWrapper } from "../styles/Carousel";
import CarouselList from "./CarouselList";
import carouselArr from "./carouselArr";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(dir: string) {
    let sum;
    if (dir === "r") {
      sum = currentSlide + 1;
    } else {
      sum = currentSlide - 1;
    }

    if (sum === carouselArr.length) {
      return setCurrentSlide(0);
    }

    if (sum === -1) {
      return setCurrentSlide(carouselArr.length - 1);
    }
    return setCurrentSlide(sum);
  }

  return (
    <>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          <CarouselList currentSlide={currentSlide} arr={carouselArr} />
        </SCarouselSlides>
        <button onClick={() => handleClick("l")}>Left</button>
        <button onClick={() => handleClick("r")}>Right</button>
      </SCarouselWrapper>
    </>
  );
};

export default Carousel;
