import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const AboutUsSection = styled.section`
  color: white;
  border-top: 1px solid white;
`;

export const StyledMainDiv = styled.div`
  max-width: 1600px;
  margin: 0 3rem;
`;

export const StyledH1 = styled.h1`
  position: relative;
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-family: ${({ theme }) => theme.headFont};
  ${mq("tiny", "min")} {
    text-align: center;
    margin: 30px 0;
  }
  ${mq("custom1", "min")} {
    margin: 30px 3rem;
    text-align: left;
  } ;
`;

export const StyledUpperDiv = styled.div`
  max-width: 1600px;
  margin: 0 3rem;
`;

export const StyledLowerDiv = styled.div`
  display: flex;

  ${mq("tiny", "min")} {
    flex-direction: column;
    width: 100%;
  }
  ${mq("custom1", "min")} {
    max-height: 33vw;
    flex-direction: row;
  }
  ${mq("desktopS", "min")} {
    max-width: 1600px;
    padding: 0 3rem;
  } ;
`;

export const StyledSmallImage = styled(Image)`
  height: 50%;
  width: 100%;
`;

export const StyledSmallImageB = styled(Image)`
  height: 50%;
  width: 100%;
  border-top: 1px solid white;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
    border-bottom: 1px solid white;
  } ;
`;

export const StyledImagesDiv = styled.div`
  flex-direction: column;
  ${mq("tiny", "min")} {
    display: none;
  }
  ${mq("custom1", "min")} {
    display: flex;
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
  border-top: 1px solid white;

  height: 99.5%;
  width: 100%;
`;

export const StyledP = styled.p`
  font-size: clamp(16px, 4vw, 1.5rem);
  font-family: ${({ theme }) => theme.mainFont};
  word-spacing: 0.25rem;
  width: 100%;
  ${mq("tiny", "min")} {
    text-align: center;
  }
  ${mq("custom1", "min")} {
    text-align: left;
  } ;
`;

export const StyledH3 = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-family: ${({ theme }) => theme.headFont};

  ${mq("tiny", "min")} {
    margin-bottom: 1rem;
    text-align: center;
  }
  ${mq("custom1", "min")} {
    margin-bottom: 1.5rem;
    text-align: left;
  } ;
`;

export const StyledSubTextDiv = styled.div`
  ${mq("tiny", "min")} {
    margin-top: 2rem;
    width: 100%;
  }
  ${mq("custom3", "min")} {
    width: 29%;
  } ;
`;

export const StyledTextDiv = styled.div`
  display: flex;

  ${mq("tiny", "min")} {
    flex-direction: column;
    margin: 0 1rem 40px 1rem;
  }
  ${mq("custom3", "min")} {
    margin: 0 3rem 40px 3rem;
    flex-direction: row;
    justify-content: space-between;
  } ;
`;
