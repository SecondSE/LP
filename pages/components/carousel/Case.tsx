import { useContext } from "react";
import CaseContext from "../../../context/case/CaseContext";
import {
  CaseText,
  CaseTitle,
  ImagesWrapper,
  ImgsDivision,
  ImgWrapper,
  StyledCaseContainer,
  TextWrapper,
  CaseImage,
  CaseHeader,
} from "../styles/CaseStudies";
import ResultsList from "./ResultsList";

interface CaseProps {
  title?: string;
  description1?: string;
  description2?: string;
  results?: string;
  resultList?: string[];
  images?: string[];
}

const Case: React.FC<CaseProps> = function ({
  title,
  description1,
  description2,
  images,
  results,
  resultList,
}) {
  const caseContext = useContext(CaseContext);

  const { init } = caseContext;

  if (!images) {
    return null;
  }

  if (!resultList) {
    return null;
  }

  return (
    <StyledCaseContainer init={init}>
      <TextWrapper>
        <CaseTitle id="case">{title}</CaseTitle>
        <CaseText>{description1}</CaseText>
        <CaseText>{description2}</CaseText>
        <CaseHeader>{results}</CaseHeader>
        <ResultsList arr={resultList} />
      </TextWrapper>
      <ImagesWrapper>
        <ImgsDivision>
          <ImgWrapper>
            <CaseImage src={images[0]} alt={""} fill={true} />
          </ImgWrapper>
          <ImgWrapper>
            <CaseImage src={images[1]} alt={""} fill={true} />
          </ImgWrapper>
        </ImgsDivision>
        <ImgsDivision>
          <ImgWrapper>
            <CaseImage src={images[2]} alt={""} fill={true} />
          </ImgWrapper>
          <ImgWrapper>
            <CaseImage src={images[3]} alt={""} fill={true} />
          </ImgWrapper>
        </ImgsDivision>
      </ImagesWrapper>
    </StyledCaseContainer>
  );
};

export default Case;
