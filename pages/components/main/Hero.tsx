import { useContext } from "react";
import { CSSTransition } from "react-transition-group";

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
import GlobalContext from "../../../context/global/GlobalContext";
export default function Hero() {
  const globalContext = useContext(GlobalContext);

  const { secCount } = globalContext;

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
      <StyledHero id="sec-hero">
        <SectionBorder
          originX="left"
          originY="top"
          toggle={secCount === 0}
          section={0}
        />
        <HeroWrapper>
          <HeroTextContainer>
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames="move"
            >
              <StyledHero__Intro>
                <span className="row">Second Sight is a </span>
                <span className="experience">
                  brand experience agency connecting
                </span>
                <span className="bold">
                  PEOPLE, CULTURE, <span className="ampersand">&</span> YOUR
                  BRAND
                </span>
              </StyledHero__Intro>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames="move"
            >
              <StyledHero__Middle>
                <h1 className="title">
                  Based In<span className="bold"> MANHATTAN</span>
                </h1>
                <h1 className="title">
                  Creating Things<span className="bold"> GLOBALLY</span>
                </h1>
              </StyledHero__Middle>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames="move"
            >
              <StyledHero__End>
                <span className="title">We specialize in</span>
                <span className="bold">
                  BRAND STRATEGY <span className="ampersand">&</span>
                </span>
                <span className="bold">EXPERENTIAL MARKETING</span>
              </StyledHero__End>
            </CSSTransition>
          </HeroTextContainer>
        </HeroWrapper>
      </StyledHero>
    </>
  );
}
