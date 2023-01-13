import {
  StyledHero,
  StyledLayer,
  StyledImage,
  HeroTextContainer,
  StyledHero__Intro,
  StyledHero__Middle,
  StyledHero__End,
} from "../styles/Main.styled";
import sanHolo from "../../../assets/sanholo-sse.webp";
import { HeroWrapper, ImageWrapper } from "../styles/Wrappers.styled";
export default function Hero() {
  return (
    <>
      <ImageWrapper>
        <StyledLayer></StyledLayer>
        <StyledImage
          src={sanHolo}
          alt="DJ San Holo performing at the SoundMint NFT event in New York City"
          priority
        />
      </ImageWrapper>
      <StyledHero>
        <HeroWrapper>
          <HeroTextContainer>
            <StyledHero__Intro>
              <span className="row">Second Sight is a </span>
              <span className="experience">
                brand experience agency connecting
              </span>
              <span className="bold">
                PEOPLE, CULTURE, <span className="ampersand">&</span> YOUR BRAND
              </span>
            </StyledHero__Intro>
            <StyledHero__Middle>
              <h1 className="title">
                Based In<span className="bold"> MANHATTAN</span>
              </h1>
              <h1 className="title">
                Creating Things<span className="bold"> GLOBALLY</span>
              </h1>
            </StyledHero__Middle>
            <StyledHero__End>
              <span className="title">We specialize in</span>
              <span className="bold">
                BRAND STRATEGY <span className="ampersand">&</span>
              </span>
              <span className="bold">EXPERENTIAL MARKETING</span>
            </StyledHero__End>
          </HeroTextContainer>
        </HeroWrapper>
      </StyledHero>
    </>
  );
}
