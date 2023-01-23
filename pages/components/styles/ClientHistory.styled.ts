import styled, { keyframes } from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const StyledClientSection = styled.section`
  border-top: 1px white solid;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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
    display: none;
    margin: 50px auto 0 auto;
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
  &.fade-in {
    transition: opacity 1s ease-in-out;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  ${mq("tiny", "min")} {
    margin: 20px 2rem;
    height: 348px;
  }
  ${mq("iphoneSE", "min")} {
    margin: 20px 2rem;
    height: 290px;
  }
  ${mq("small", "min")} {
    margin: 20px 2rem;
    height: 220px;
  }
  ${mq("phoneMed", "min")} {
    margin: 20px 2rem;
    height: 200px;
  }
  ${mq("phoneLg", "min")} {
    margin: 20px 2rem;
    height: 180px;
  }
  ${mq("custom1", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 150px;
  }
  ${mq("custom4", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 145px;
  }
  ${mq("tablet", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 180px;
  }
  ${mq("custom2", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 190px;
  }
  ${mq("tabletLg", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 230px;
  }
  ${mq("iPadPro", "min")} {
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    height: 250px;
  }
`;

export const StyledPerson = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(1rem, 3vw, 1.6rem);
  font-style: italic;
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
  margin-top: 20px;
`;

export const StyledTest = styled.p`
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(1.2rem, 3vw, 2rem);
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
`;

export const StyledCarouselLogoDiv = styled.div`
  &.in {
    opacity: 100%;
    transition: opacity 2s ease-in-out;
  }
  &.out {
    opacity: 0%;
    transition: 1.5s ease-in-out;
    transform: translateX(-100%);
  }
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 0 1rem;
    height: 120px;
  }
  ${mq("custom1", "min")} {
    display: none;
  }
`;

export const StyledCarouselLogo = styled(Image)`
  object-fit: contain;
  width: 80%;
  height: auto;
`;
