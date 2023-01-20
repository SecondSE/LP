import { SlideImageWrapper, SlideImage } from "../styles/Carousel";

interface SlideProps {
  img: any;
  alt: string;
  ind: number;
}

const CarouselSlide: React.FC<SlideProps> = function ({ ind, img, alt }) {
  return (
    <SlideImageWrapper>
      <SlideImage
        style={{ objectFit: "cover" }}
        id={`slide-${ind}`}
        src={img}
        alt={alt}
        fill={true}
        sizes={"(min-width: 320px) 100vw"}
      />
    </SlideImageWrapper>
  );
};

export default CarouselSlide;
