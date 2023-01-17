import {
  StyledAction,
  StyledTitle,
  StyledDescrip,
  ImageContainer,
  TraitsContainer,
} from "../styles/Main.styled";
import {
  DescriptionWrapper,
  ActionTextWrapper,
  ActionImageWrapper,
} from "../styles/Wrappers.styled";
import Image from "next/image";
import SMSign from "../../../assets/soundmint-sign.svg";

export default function Action() {
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
          <h3>BRANDING</h3>
          <TraitsContainer>
            <span>Brand Strategy</span>
            <span>Postioning & Pillars</span>
            <span>Brand Narrative & Messaging</span>
            <span>Consumer Trend & Research</span>
            <span>Visual Identity</span>
            <span>Logo Design</span>
          </TraitsContainer>
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <h3>EXPERENTIAL MARKETING</h3>
          <TraitsContainer>
            <span>Brand Strategy</span>
            <span>Postioning & Pillars</span>
            <span>Brand Narrative & Messaging</span>
            <span>Consumer Trend & Research</span>
            <span>Visual Identity</span>
            <span>Logo Design</span>
          </TraitsContainer>
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <h3>INTEGRATED MARKETING</h3>
          <TraitsContainer>
            <span>Brand Strategy</span>
            <span>Postioning & Pillars</span>
            <span>Brand Narrative & Messaging</span>
            <span>Consumer Trend & Research</span>
            <span>Visual Identity</span>
            <span>Logo Design</span>
          </TraitsContainer>
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
        <ImageContainer>
          <h3>WEB DESIGN / DEVELOPMENT</h3>
          <TraitsContainer>
            <span>Brand Strategy</span>
            <span>Postioning & Pillars</span>
            <span>Brand Narrative & Messaging</span>
            <span>Consumer Trend & Research</span>
            <span>Visual Identity</span>
            <span>Logo Design</span>
          </TraitsContainer>
          <Image src={SMSign} alt="SoundMint Sign" />
        </ImageContainer>
      </ActionImageWrapper>
    </StyledAction>
  );
}
