import SectionBorder from "../general/SectionBorder";

import {
  StyledHero,
  StyledLayer,
  StyledImage,
  HeroTextContainer,
  StyledHero__Intro,
  StyledHero__Middle,
  StyledHero__End,
} from "../styles/Main.styled";
import sanHolo from "../../../public/imgs/hero/sanholo.webp";
import { HeroWrapper, ImageWrapper } from "../styles/Wrappers.styled";
export default function Hero() {
  return (
    <>
      <ImageWrapper>
        <StyledLayer></StyledLayer>
        <StyledImage
          priority
          sizes="(min-width: 320px) 50vw, 100vw"
          src={sanHolo}
          alt="DJ San Holo performing at the SoundMint NFT event in New York City"
        />
      </ImageWrapper>
      <StyledHero id="sec-hero">
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
          <SectionBorder />
        </HeroWrapper>
      </StyledHero>
    </>
  );
}
