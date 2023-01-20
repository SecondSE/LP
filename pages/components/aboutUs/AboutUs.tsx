import { useContext } from "react";
import GlobalContext from "../../../context/global/GlobalContext";
import SectionBorder from "../general/SectionBorder";
import {
  AboutUsSection,
  StyledH3,
  StyledUpperDiv,
  StyledTextDiv,
  StyledP,
  StyledH4,
  StyledSubTextDiv,
} from "../styles/AboutUs.styled";
import { MaxWrapper } from "../styles/Wrappers.styled";
import Images from "./Images";

export default function AboutUs() {
  const globalContext = useContext(GlobalContext);

  const { secCount } = globalContext;

  return (
    <AboutUsSection id="sec-about">
      <SectionBorder
        originX="left"
        originY="top"
        toggle={secCount >= 3}
        section={3}
      />
      <MaxWrapper>
        <StyledUpperDiv>
          <StyledH3 id="about">ABOUT US</StyledH3>
          <StyledTextDiv>
            <StyledSubTextDiv>
              <StyledH4>WHO WE ARE</StyledH4>
              <StyledP>
                {" "}
                As creators at heart, we are your partner in bringing fresh
                ideas to the table, and even more importantly, in bringing your
                brand to life.
              </StyledP>
            </StyledSubTextDiv>
            <StyledSubTextDiv>
              <StyledH4>OUR PHILOSOPHY</StyledH4>
              <StyledP>
                {" "}
                Each project is a fresh start. We’re constantly inspired by the
                possibilites of a blank page. Let’s create something entirely
                unique, together.
              </StyledP>
            </StyledSubTextDiv>
            <StyledSubTextDiv>
              <StyledH4>HOW WE WORK</StyledH4>
              <StyledP>
                {" "}
                We work with a founder-first mentality, taking the long-term
                approach to every project. We’re here to transform your brand
                from an idea into a household name.
              </StyledP>
            </StyledSubTextDiv>
          </StyledTextDiv>
        </StyledUpperDiv>

        <Images />
      </MaxWrapper>
    </AboutUsSection>
  );
}
