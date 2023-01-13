import { useContext } from "react";
import CaseContext from "../../../context/case/CaseContext";
import {
  CaseTitle,
  ImagesWrapper,
  ImgsDivision,
  StyledCaseContainer,
  TextWrapper,
} from "../styles/CaseStudies";

interface CaseProps {
  title?: string;
  description1?: string;
  description2?: string;
  results?: string;
  resultList?: string[];
  images?: string[];
}

const Case: React.FC<CaseProps> = function ({ title }) {
  const caseContext = useContext(CaseContext);

  const { init } = caseContext;

  return (
    <StyledCaseContainer init={init}>
      <TextWrapper>
        <CaseTitle>{title}</CaseTitle>
      </TextWrapper>
      <ImagesWrapper>
        <ImgsDivision></ImgsDivision>
      </ImagesWrapper>
    </StyledCaseContainer>
  );
};

export default Case;
