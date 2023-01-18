import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const StyledClientSection = styled.section`
  border-top: 1px white solid;
`;

export const StyledDiv = styled.div`
  max-width: 1600px;
  margin: 30px auto 50px auto;
`;

export const StyledUpperDiv = styled.div`
    color:white;
    margin: 0 auto:
`;

export const StyledH3 = styled.h3`
  font-size: clamp(4.22rem, 17vw, 8rem);
  font-family: ${({ theme }) => theme.headFont3};
  margin: 0 3rem;

  ${mq("tiny", "min")} {
    display: none;
  }
  ${mq("custom5", "min")} {
    display: block;
    text-align: center;
  } ;
`;

export const StyledMQTitle = styled.h3`
  font-size: clamp(3.22rem, 17vw, 8rem);
  font-family: ${({ theme }) => theme.headFont3};

  ${mq("tiny", "min")} {
    display: block;
    text-align: center;
    margin: 0 1rem;
  }
  ${mq("desktopS", "min")} {
    margin 0 3rem;
  } 
  ${mq("custom5", "min")} {
    display: none;
  } ;
`;

export const StyledLogoDiv = styled.div`
  ${mq("tiny", "min")} {
    margin: 50px auto;
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 30px 0;
  }
  ${mq("custom1", "min")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 0;
  }
  ${mq("custom2", "min")} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    gap: 20px;
  } ;
`;

const ImageSizing = styled(Image)``;

export const StyledTrapNationImage = styled(ImageSizing)`
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  }
`;
export const StyledOnlyNYImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 250px;
    height: auto;
  }
  ${mq("custom1", "min")} {
    max-width: 300px;
    height: auto;
  }
  ${mq("custom2", "max")} {
    max-width: 200px;
    height: auto;
  }
`;
export const StyledBBClubImage = styled(ImageSizing)`
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  }
`;

export const StyledWhaleBoneImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 98%;
    height: auto;
  }
  ${mq("custom1", "min")} {
    max-width: 300px;
    height: auto;
  }
  ${mq("custom2", "max")} {
    max-width: 200px;
    height: auto;
  }
`;

export const StyledSoundMintImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 250px;
    height: auto;
  }
  ${mq("custom1", "min")} {
    max-width: 300px;
    height: auto;
  }
  ${mq("custom2", "max")} {
    max-width: 250px;
    height: auto;
  }
`;
export const StyledNateImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 250px;
    height: auto;
  }
  ${mq("custom1", "min")} {
    max-width: 240px;
    height: auto;
  }
  ${mq("custom2", "max")} {
    max-width: 175px;
    height: auto;
  }
`;

export const StyledQuoteDiv = styled.div`
  max-width: 1000px;
  ${mq("tiny", "min")} {
    margin: 20px 2rem;
  }
  ${mq("custom1", "min")} {
    margin: 40px auto;
    padding: 0 2rem;
  }
`;

export const StyledPerson = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(1.5rem, 3vw, 2rem);
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
  margin-top: 15px;
`;

export const StyledTest = styled.p`
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(1.5rem, 3vw, 2rem);
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
`;
