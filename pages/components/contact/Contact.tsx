import { useContext } from "react";
import GlobalContext from "../../../context/global/GlobalContext";
import SectionBorder from "../general/SectionBorder";
import {
  StyledH4,
  StyledH3,
  StyledDiv,
  StyledLeftSection,
  StyledContactSection,
  StyledRightSection,
} from "../styles/Contact.styled";
import Form from "./Form";

export default function Contact() {
  const globalContext = useContext(GlobalContext);

  const { secCount } = globalContext;

  return (
    <StyledContactSection id="sec-contact">
      <SectionBorder
        originX="left"
        originY="top"
        toggle={secCount >= 4}
        section={0}
      />
      <StyledDiv>
        <StyledLeftSection>
          <Form />
        </StyledLeftSection>
        <StyledRightSection>
          <StyledH3 id="contact">LET&apos;S TALK</StyledH3>
          <StyledH4>NEW BUSINESS</StyledH4>
          {/* <h2>nick@secondsight.com</h2> */}
        </StyledRightSection>
      </StyledDiv>
    </StyledContactSection>
  );
}
