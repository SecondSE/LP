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
import Images from "./Images";

export default function AboutUs() {
  return (
    <AboutUsSection>
      <StyledMainDiv>
        <StyledUpperDiv>
          <StyledH1>ABOUT US</StyledH1>
          <StyledTextDiv>
            <StyledSubTextDiv>
              <StyledH3>WHO WE ARE</StyledH3>
              <StyledP>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                a voluptatibus praesentium sint non. Quam, ad iure explicabo
                nesciunt nostrum nisi consequuntur harum beatae temporibus eum
                reprehenderit vitae, commodi enim.
              </StyledP>
            </StyledSubTextDiv>
            <StyledSubTextDiv>
              <StyledH3>OUR PHILOSOPHY</StyledH3>
              <StyledP>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                a voluptatibus praesentium sint non. Quam, ad iure explicabo
                nesciunt nostrum nisi consequuntur harum beatae temporibus eum
                reprehenderit vitae, commodi enim.
              </StyledP>
            </StyledSubTextDiv>
            <StyledSubTextDiv>
              <StyledH3>HOW WE WORK</StyledH3>
              <StyledP>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                a voluptatibus praesentium sint non. Quam, ad iure explicabo
                nesciunt nostrum nisi consequuntur harum beatae temporibus eum
                reprehenderit vitae, commodi enim.
              </StyledP>
            </StyledSubTextDiv>
          </StyledTextDiv>
        </StyledUpperDiv>

        <Images />
      </StyledMainDiv>
    </AboutUsSection>
  );
}
