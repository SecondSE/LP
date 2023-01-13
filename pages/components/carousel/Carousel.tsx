import { useContext, useState } from "react";
import {
  CarouselTitle,
  SCarouselSlides,
  SCarouselWrapper,
} from "../styles/Carousel";
import CarouselList from "./CarouselList";
import caseStudies from "../caseStudies/caseStudies";
import carouselArr from "./carouselArr";
import CaseContext from "../../../context/case/CaseContext";

const Carousel = () => {
  const { caseStudy } = useContext(CaseContext);

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
        <CarouselTitle>{caseStudies[caseStudy].title}</CarouselTitle>
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
