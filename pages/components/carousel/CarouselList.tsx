import { useContext } from "react";
import { SCarouselSlide } from "../styles/Carousel";
import CaseContext from "../../../context/case/CaseContext";

interface ListProps {
  children: JSX.Element[];
  currSlide: number;
}

const CarouselList = ({ children, currSlide }: ListProps) => {
  const caseContext = useContext(CaseContext);

  const { caseStudy, setActive } = caseContext;

  return (
    <>
      {children.map((slide, i) => (
        <SCarouselSlide active={currSlide === i} key={i}>
          {slide}
        </SCarouselSlide>
      ))}
    </>
  );
};

export default CarouselList;
