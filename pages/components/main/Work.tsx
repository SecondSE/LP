/* eslint-disable react/no-unescaped-entities */
import { WorkImageWrapper, WorkWrapper } from "../styles/Wrappers.styled";
import {
  StyledWorkContainer,
  StyledWorkTitle,
  StyledWorkDescrip,
  StyledWorkImage,
} from "../styles/Main.styled";
import soundMintCrowd from "../../../assets/soundmint-crowd.png";

export default function Work() {
  return (
    <WorkWrapper>
      <StyledWorkContainer>
        <StyledWorkTitle>
          <h2>WHAT'S BEEN</h2>
          <h2>DONE BEFORE.</h2>
        </StyledWorkTitle>
        <StyledWorkDescrip>
          <p>
            If there were no limits, where would you go? This is the question we
            ask ourselves at the start of every project we take on.
          </p>
          <p>
            We're building brands and experiences that go beyond what the eye
            sees, creating shared moments with the people you're after.
          </p>
        </StyledWorkDescrip>
        <WorkImageWrapper>
          <StyledWorkImage
            src={soundMintCrowd}
            alt="A photo of the crowd gathered at the Soundmint event"
          ></StyledWorkImage>
        </WorkImageWrapper>
      </StyledWorkContainer>
    </WorkWrapper>
  );
}
