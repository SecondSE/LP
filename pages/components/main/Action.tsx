import { useEffect } from "react";
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
  ActionImageWrapper,
} from "../styles/Wrappers.styled";
import Image from "next/image";
import SMSign from "../../../assets/soundmint-sign.webp";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Action() {
  useEffect(() => {
    AOS.init({ mirror: false, once: false, duration: 1000 });
  }, []);

  return (
    <StyledAction>
      <ActionTextWrapper>
        <StyledTitle>
          <h3>WHAT</h3>
          <h3>WE DO.</h3>
          <span>SEE WHAT WE CAN DO</span>
        </StyledTitle>
        <DescriptionWrapper>
          <StyledDescrip>
            We see ourselves as the bridge between creativity and genius.
          </StyledDescrip>
          <StyledDescrip>
            Have a crazy dream? Or just an idea on a napkin? Let us turn it into
            an enegizing, head-scratching, aha moment to remember.
          </StyledDescrip>
        </DescriptionWrapper>
      </ActionTextWrapper>
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
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <ColorLayer />
          <h3>EXPERENTIAL MARKETING</h3>
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
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <ColorLayer />
          <h3>INTEGRATED MARKETING</h3>
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
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <ColorLayer />
          <h3 className="trait">WEB DESIGN / DEVELOPMENT</h3>
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
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
      </ActionImageWrapper>
    </StyledAction>
  );
}
