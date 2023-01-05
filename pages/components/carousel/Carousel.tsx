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
  const [currentSlide, setCurrentSlide] = useState(0);

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
        <button
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        >
          Right
        </button>
      </SCarouselWrapper>
    </>
  );
};

export default Carousel;
