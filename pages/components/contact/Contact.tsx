import {
  StyledH2,
  StyledH1,
  StyledDiv,
  StyledLeftSection,
  StyledContactSection,
  StyledRightSection,
} from "../styles/Contact.styled";
import Form from "./Form";

export default function Contact() {
  return (
    <StyledContactSection id="sec-contact">
      <StyledDiv>
        <StyledLeftSection>
          <Form />
        </StyledLeftSection>

        <StyledRightSection>
          <StyledH1 id="contact">LET&apos;S TALK</StyledH1>
          <StyledH2>NEW BUSINESS</StyledH2>
          {/* <h2>nick@secondsight.com</h2> */}
        </StyledRightSection>
      </StyledDiv>
    </StyledContactSection>
  );
}
