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

export const StyledH1 = styled.h1`
  font-size: 3rem;
  ${mq("tiny", "min")} {
    text-align: center;
    margin: auto;
  }
  ${mq("custom1", "min")} {
    text-align: left;
    margin: none;
  } ;
`;

export const StyledP = styled.p`
  font-size: clamp(14px, 4vw, 2rem);

  ${mq("tiny", "min")} {
    text-align: center;
    margin: 20px 1rem 30px 1rem;
  }
  ${mq("custom2", "min")} {
    margin: 40px 1rem;
  }
  ${mq("custom1", "min")} {
    text-align: center;
    max-width: 700px;
    margin: 40px auto;
  } ;
`;

export const StyledLogoDiv = styled.div`
  ${mq("tiny", "min")} {
    margin: 0 auto;
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
  }
  ${mq("custom1", "min")} {
    width: 300px;
  }
  ${mq("custom2", "max")} {
    width: 200px;
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
  }
  ${mq("custom1", "min")} {
    width: 300px;
  }
  ${mq("custom2", "max")} {
    width: 200px;
  }
`;

// sound mint logo has inline height styling at Logos.tsx
export const StyledSoundMintImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 250px;
  }
  ${mq("custom1", "min")} {
    width: 300px;
  }
  ${mq("custom2", "max")} {
    width: 250px;
  }
`;
export const StyledNateImage = styled(ImageSizing)`
  object-fit: contain;
  ${mq("tiny", "min")} {
    width: 250px;
  }
  ${mq("custom1", "min")} {
    width: 240px;
  }
  ${mq("custom2", "max")} {
    width: 175px;
  }
`;
