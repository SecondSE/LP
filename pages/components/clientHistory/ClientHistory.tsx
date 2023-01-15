import {
  StyledP,
  StyledDiv,
  StyledH1,
  StyledUpperDiv,
  StyledClientSection,
  StyledMQTitle,
} from "../styles/ClientHistory.styled";
import TextCarousel from "../TextCarousel/TextCarousel";
import Logos from "./Logos";

export default function ClientHistory() {
  return (
    <StyledClientSection>
      <StyledDiv>
        <StyledUpperDiv>
          <StyledH1>WE LOVE CLIENTS WE</StyledH1>
          <StyledH1>SEE EYE TO EYE WITH</StyledH1>
          <StyledMQTitle>WE LOVE CLIENTS WE SEE EYE TO EYE WITH</StyledMQTitle>
          <TextCarousel />
        </StyledUpperDiv>
        <Logos />
      </StyledDiv>
    </StyledClientSection>
  );
}
