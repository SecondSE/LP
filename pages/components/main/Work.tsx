/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { WorkImageWrapper, WorkWrapper } from "../styles/Wrappers.styled";
import {
  StyledWorkContainer,
  StyledWorkTitle,
  StyledWorkDescrip,
} from "../styles/Main.styled";

import Carousel from "../carousel/Carousel";
import Case from "../carousel/Case";
import CaseContext from "../../../context/case/CaseContext";
import caseStudies from "../caseStudies/caseStudies";

export default function Work() {
  const caseContext = useContext(CaseContext);

  const { caseStudy, init } = caseContext;

  let item;

  if (init) {
    item = caseStudies[caseStudy];
  }

  return (
    <WorkWrapper id="Work">
      <StyledWorkContainer>
        <StyledWorkTitle id="work">
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
          <Carousel />
        </WorkImageWrapper>
        {init && <Case {...item} />}
      </StyledWorkContainer>
    </WorkWrapper>
  );
}
