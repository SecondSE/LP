import {
  StyledDiv,
  StyledH3,
  StyledUpperDiv,
  StyledClientSection,
  StyledMQTitle,
} from "../styles/ClientHistory.styled";
import TextCarousel from "../TextCarousel/TextCarousel";
import LogoCarousel from "../LogoCarousel/LogoCarousel";

import Logos from "./Logos";

export default function ClientHistory() {
  return (
    <StyledClientSection>
      <StyledDiv>
        <StyledUpperDiv>
          <StyledH3>WE LOVE CLIENTS WE</StyledH3>
          <StyledH3>SEE EYE TO EYE WITH</StyledH3>
          <StyledMQTitle>WE LOVE CLIENTS WE SEE EYE TO EYE WITH</StyledMQTitle>
          <TextCarousel />
        </StyledUpperDiv>
        <LogoCarousel />
        <Logos />
      </StyledDiv>
    </StyledClientSection>
  );
}
