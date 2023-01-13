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
          <>
            <SCarouselSlide
              active={currentSlide === i}
              onClick={() => handleClick(i)}
              key={i}
            >
              <CarouselSlide img={elem.img} alt={elem.alt} />
            </SCarouselSlide>
          </>
        );
      })}
    </>
  );
};

export default CarouselList;
