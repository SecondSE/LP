import { useContext } from "react";
import { SCarouselSlide } from "../styles/Carousel";
import CaseContext from "../../../context/case/CaseContext";
import caseStudies from "../caseStudies/caseStudies";
import { StyledCaseContainer } from "../styles/CaseStudies";

interface ListProps {
  currSlide: number;
}

const CarouselList = ({ currSlide }: ListProps) => {
  const caseContext = useContext(CaseContext);

  const { caseStudy, setActive } = caseContext;

  function handleClick(ind: number) {
    console.log(ind);
    if (setActive) {
      return setActive(ind);
    }
  }
  return (
    <>
      {caseStudies.map((slide, i) => (
        <SCarouselSlide onClick={() => handleClick(i)} key={i} />
      ))}
    </>
  );
};

export default CarouselList;
