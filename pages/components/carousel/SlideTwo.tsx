import { SContainer, STextWrapper, CarouselImage } from "../styles/Carousel";
import soundMintCrowd from "../../../assets/soundmint-crowd.png";

export const SlideTwo = () => (
  <SContainer>
    <STextWrapper>
      <h2>THE GIFT EXPRESS</h2>
      <h2>BY NATE</h2>
    </STextWrapper>
    <CarouselImage
      src={soundMintCrowd}
      alt="A photo of the crowd gathered at the Soundmint event"
    />
  </SContainer>
);
