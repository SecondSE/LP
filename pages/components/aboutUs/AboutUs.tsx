import {
  AboutUsSection,
  StyledH1,
  StyledUpperDiv,
  StyledTextDiv,
  StyledMainDiv,
  StyledP,
  StyledH3,
  StyledSubTextDiv,
} from "../styles/AboutUs.styled";
import { MaxWrapper } from "../styles/Wrappers.styled";
import Images from "./Images";

export default function AboutUs() {
  return (
    <AboutUsSection id="sec-about">
      <MaxWrapper>
        <StyledMainDiv>
          <StyledUpperDiv>
            <StyledH1 id="about">ABOUT US</StyledH1>
            <StyledTextDiv>
              <StyledSubTextDiv>
                <StyledH3>WHO WE ARE</StyledH3>
                <StyledP>
                  {" "}
                  As creators at heart, we are your partner in bringing fresh
                  ideas to the table, and even more importantly, in bringing
                  your brand to life.
                </StyledP>
              </StyledSubTextDiv>
              <StyledSubTextDiv>
                <StyledH3>OUR PHILOSOPHY</StyledH3>
                <StyledP>
                  {" "}
                  Each project is a fresh start. We’re constantly inspired by
                  the possibilites of a blank page. Let’s create something
                  entirely unique, together.
                </StyledP>
              </StyledSubTextDiv>
              <StyledSubTextDiv>
                <StyledH3>HOW WE WORK</StyledH3>
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
        </StyledMainDiv>
      </MaxWrapper>
    </AboutUsSection>
  );
}
