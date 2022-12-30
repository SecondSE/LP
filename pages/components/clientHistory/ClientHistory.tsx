import {
  StyledP,
  StyledDiv,
  StyledH1,
  StyledUpperDiv,
  StyledClientSection,
} from "../styles/ClientHistory.styled";
import Logos from "./Logos";

export default function ClientHistory() {
  return (
    <StyledClientSection>
      <StyledDiv>
        <StyledUpperDiv>
          <StyledH1>WE LOVE CLIENTS WE</StyledH1>
          <StyledH1>SEE EYE TO EYE WITH</StyledH1>
          <StyledP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque unde
            veritatis doloribus? Totam nihil iste hic repellat, excepturi
            reprehenderit, ipsa praesentium distinctio voluptas illo et animi
            blanditiis odit minima ratione!
          </StyledP>
        </StyledUpperDiv>
        <Logos />
      </StyledDiv>
    </StyledClientSection>
  );
}
