import { useContext } from "react";
import { SCarouselSlide, CarouselTitle } from "../styles/Carousel";
import CaseContext from "../../../context/case/CaseContext";
import CarouselSlide from "./CarouselSlide";

interface ArrObj {
  img: string;
  alt: string;
  title: string;
}

interface ListProps {
  arr: ArrObj[];
  currentSlide: number;
}

const CarouselList = ({ arr, currentSlide }: ListProps) => {
  const caseContext = useContext(CaseContext);
  const { setActive } = caseContext;

  function handleClick(ind: number) {
    if (setActive) {
      return setActive(ind);
    }
  }

  return (
    <>
      {arr.map((elem, i) => {
        return (
          <SCarouselSlide
            role="button"
            active={currentSlide === i}
            onClick={() => handleClick(i)}
            key={i}
            aria-describedby={`slide-${i}`}
          >
            <CarouselSlide ind={i} img={elem.img} alt={elem.alt} />
          </SCarouselSlide>
        );
      })}
    </>
  );
};

export default CarouselList;
