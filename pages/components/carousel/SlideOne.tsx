import { SContainer, STextWrapper, CarouselImage } from "../styles/Carousel";
import soundMintCrowd from "../../../assets/soundmint-crowd.png";

export const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <h2>SOUNDMINT LABS</h2>
      <h2>NFT.NYC LAUNCH</h2>
    </STextWrapper>
    <CarouselImage
      src={soundMintCrowd}
      alt="A photo of the crowd gathered at the Soundmint event"
    />
  </SContainer>
);
