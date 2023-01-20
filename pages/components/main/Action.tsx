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
  MaxActionImageWrapper,
  ActionImageWrapper,
} from "../styles/Wrappers.styled";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { TopBorder } from "../styles/General.styled";

export default function Action() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <StyledAction id="sec-services">
      <ActionTextWrapper>
        <StyledTitle id="services">
          <TopBorder />
          <h3>WHAT</h3>
          <h3>WE DO.</h3>
          <span>SEE WHAT WE CAN DO</span>
        </StyledTitle>
        <DescriptionWrapper>
          <TopBorder />
          <StyledDescrip>
            We see ourselves as the bridge between creativity and genius.
          </StyledDescrip>
          <StyledDescrip>
            Have a crazy dream? Or just an idea on a napkin? Let us turn it into
            an enegizing, head-scratching, aha moment to remember.
          </StyledDescrip>
        </DescriptionWrapper>
      </ActionTextWrapper>
      <MaxActionImageWrapper>
        <ActionImageWrapper>
          <TopBorder className="action-border" />
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
              fill={true}
              src="/imgs/services/branding.webp"
              alt="Two girls at a Nate Photoshoot"
            />
          </ImageContainer>
          <ImageContainer>
            <ColorLayer />
            <h3>EXPERENTIAL MARKETING</h3>
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
              fill={true}
              src="/imgs/services/exp-marketing.webp"
              alt="Two girls at a Nate Photoshoot"
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
              fill={true}
              src="/imgs/services/int-marketing.webp"
              alt="Two girls at a Nate Photoshoot"
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
              fill={true}
              src="/imgs/services/webdev.webp"
              alt="Two girls at a Nate Photoshoot"
            />
          </ImageContainer>
        </ActionImageWrapper>
      </MaxActionImageWrapper>
    </StyledAction>
  );
}
