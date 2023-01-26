import { useRef, useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import {
  StyledAction,
  StyledTitle,
  StyledDescrip,
  ImageContainer,
  TraitsContainer,
  ColorLayer,
} from "../styles/Main.styled";
import {
  DescriptionWrapper,
  ActionTextWrapper,
  MaxActionImageWrapper,
  ActionImageWrapper,
} from "../styles/Wrappers.styled";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import SectionBorder from "../general/SectionBorder";
import GlobalContext from "../../context/global/GlobalContext";

export default function Action() {
  const globalContext = useContext(GlobalContext);
  const { secCount } = globalContext;

  const actionElem = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <CSSTransition
      nodeRef={actionElem}
      in={true}
      appear={true}
      timeout={600}
      classNames="show"
    >
      <StyledAction ref={actionElem} id="sec-services">
        <SectionBorder originX="left" originY="top" toggle={true} section={1} />
        <ActionTextWrapper>
          <StyledTitle id="services">
            <h3>WHAT</h3>
            <h3>WE DO.</h3>
            <span>SEE WHAT WE CAN DO</span>
          </StyledTitle>
          <DescriptionWrapper>
            <StyledDescrip>
              We see ourselves as the bridge between creativity and genius.
            </StyledDescrip>
            <StyledDescrip>
              Have a crazy dream? Or just an idea on a napkin? Let us turn it
              into an energizing, head-scratching, aha moment to remember.
            </StyledDescrip>
          </DescriptionWrapper>
        </ActionTextWrapper>
        <MaxActionImageWrapper>
          <ActionImageWrapper>
            <ImageContainer>
              <ColorLayer />
              <h3>BRANDING</h3>
              <TraitsContainer>
                <span data-aos-delay="500" data-aos="zoom-in">
                  Brand Strategy
                </span>
                <span data-aos-delay="1000" data-aos="zoom-in">
                  Postioning & Pillars
                </span>
                <span data-aos-delay="1500" data-aos="zoom-in">
                  Brand Narrative & Messaging
                </span>
                <span data-aos-delay="2000" data-aos="zoom-in">
                  Consumer Trend & Research
                </span>
                <span data-aos-delay="2500" data-aos="zoom-in">
                  Visual Identity
                </span>
                <span data-aos-delay="3000" data-aos="zoom-in">
                  Logo Design
                </span>
              </TraitsContainer>
              <Image
                sizes="(min-width: 320px) 50vw, 100vw"
                fill={true}
                src="/imgs/services/branding.webp"
                alt="Two girls at a Nate Photoshoot"
              />
            </ImageContainer>
            <ImageContainer>
              <ColorLayer />
              <h3>EXPERIENTIAL MARKETING</h3>
              <TraitsContainer>
                <span data-aos-delay="500" data-aos="zoom-in">
                  Experiental Activations
                </span>
                <span data-aos-delay="1000" data-aos="zoom-in">
                  Event Planning & Management
                </span>
                <span data-aos-delay="1500" data-aos="zoom-in">
                  Street/Field Marketing
                </span>
                <span data-aos-delay="2000" data-aos="zoom-in">
                  Brand Ambassadors
                </span>
                <span data-aos-delay="2500" data-aos="zoom-in">
                  Virtual Event Production
                </span>
                <span data-aos-delay="3000" data-aos="zoom-in">
                  Web3 & NFT Experiences
                </span>
              </TraitsContainer>
              <Image
                sizes="(min-width: 320px) 50vw, 100vw"
                fill={true}
                src="/imgs/services/exp-marketing.webp"
                alt="Shopper at Nate Gift Express"
              />
            </ImageContainer>
            <ImageContainer>
              <ColorLayer />
              <h3>INTEGRATED MARKETING</h3>
              <TraitsContainer>
                <span data-aos-delay="500" data-aos="zoom-in">
                  Social Media Strategy & Management
                </span>
                <span data-aos-delay="1000" data-aos="zoom-in">
                  Email Marketing
                </span>
                <span data-aos-delay="1500" data-aos="zoom-in">
                  Marketing Strategy
                </span>
                <span data-aos-delay="2000" data-aos="zoom-in">
                  Community Management
                </span>
                <span data-aos-delay="2500" data-aos="zoom-in">
                  Content Marketing
                </span>
              </TraitsContainer>
              <Image
                sizes="(min-width: 320px) 50vw, 100vw"
                fill={true}
                src="/imgs/services/int-marketing.webp"
                alt="SoundMint neon sign"
              />
            </ImageContainer>
            <ImageContainer>
              <ColorLayer />
              <h3 className="trait">WEB DESIGN / DEVELOPMENT</h3>
              <TraitsContainer>
                <span data-aos-delay="500" data-aos="zoom-in">
                  Wireframing
                </span>
                <span data-aos-delay="1000" data-aos="zoom-in">
                  Website Development
                </span>
                <span data-aos-delay="1500" data-aos="zoom-in">
                  Rapid Prototyping
                </span>
                <span data-aos-delay="2000" data-aos="zoom-in">
                  User Experience
                </span>
                <span data-aos-delay="2500" data-aos="zoom-in">
                  Interface Design
                </span>
                <span data-aos-delay="3000" data-aos="zoom-in">
                  Product Development
                </span>
              </TraitsContainer>
              <Image
                sizes="(min-width: 320px) 50vw, 100vw"
                fill={true}
                src="/imgs/services/webdev.webp"
                alt="Candid photo of two people at the OnlyNY event"
              />
            </ImageContainer>
          </ActionImageWrapper>
        </MaxActionImageWrapper>
      </StyledAction>
    </CSSTransition>
  );
}
