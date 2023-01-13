import { SlideImageWrapper, SlideImage } from "../styles/Carousel";

interface SlideProps {
  img: any;
  alt: string;
}

const CarouselSlide: React.FC<SlideProps> = function ({ img, alt }) {
  return (
    <SlideImageWrapper>
      <SlideImage src={img} alt={alt} fill={true} />
    </SlideImageWrapper>
  );
};

export default CarouselSlide;
