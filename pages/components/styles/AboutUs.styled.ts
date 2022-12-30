import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const AboutUsSection = styled.section`
  color: white;
  border-top: 1px solid white;
`;

export const StyledMainDiv = styled.div`
  max-width: 1600px;
  margin: auto;
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  margin: 30px 0 30px 20px;
`;

export const StyledUpperDiv = styled.div``;

export const StyledLowerDiv = styled.div`
  border-top: 1px solid white;
  display: flex;
  margin: auto;
  ${mq("tiny", "min")} {
    flex-direction: column;
  }
  ${mq("custom1", "min")} {
    max-height: 33vw;
    flex-direction: row;
  } ;
`;

export const StyledSmallImage = styled(Image)`
  height: 50%;
  width: 100%;
`;

export const StyledSmallImageB = styled(Image)`
  height: 50%;
  width: 100%;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
    border-bottom: 1px solid white;
  } ;
`;

export const StyledImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
    width: 30%;
    max-height: 33vw;
  } ;
`;

export const StyledBigImageDiv = styled.div`
  ${mq("tiny", "min")} {
    width: 100%;
  }
  ${mq("custom1", "min")} {
    border-right: 1px solid white;
    width: 70%;
  } ;
`;

export const StyledBigImage = styled(Image)`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export const StyledP = styled.p`
  width: 100%;
`;

export const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledSubTextDiv = styled.div`
  ${mq("tiny", "min")} {
    margin-top: 2rem;
    width: 100%;
  }
  ${mq("custom1", "min")} {
    width: 29%;
  } ;
`;

export const StyledTextDiv = styled.div`
  display: flex;
  margin: 0 20px 40px 20px;

  ${mq("tiny", "min")} {
    flex-direction: column;
  }
  ${mq("custom1", "min")} {
    flex-direction: row;
    justify-content: space-between;
  } ;
`;
