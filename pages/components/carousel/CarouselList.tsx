import { SCarouselSlide } from "../styles/Carousel";

interface ListProps {
  children: JSX.Element[];
  currSlide: number;
}

const CarouselList = ({ children, currSlide }: ListProps) => {
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
