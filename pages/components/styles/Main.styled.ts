import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const LeftBorder = styled.div`
  position: absolute;
  top: 0;
  left: 3rem;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  tranform-origin: top;
`;

export const RightBorder = styled.div`
  position: absolute;
  top: 0;
  right: 3rem;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  tranform-origin: top;
`;

export const StyledLayer = styled.div`
  position: absolute;
  height: 111vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 27%) 89%,
    rgba(29, 29, 29, 98%) 98%
  );
  z-index: 1;
`;

export const StyledImage = styled(Image)`
  width: 100vw;
  height: 110vh;
  object-fit: cover;
`;
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  position: absolute;
  top: 26%;
  height: 46%;
  width: 100%;
  gap: 17%;
  padding: 0 0.8rem;
  ${mq("desktopS", "min")} {
    padding: 0 4rem;
  }
`;

export const StyledHero = styled.section`
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const StyledHero__Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme }) => theme.thinFont};
  font-weight: 100;
  & .row {
    font-size: clamp(1.1rem, 5.5vw, 4.5rem);
  }
  & .experience {
    font-size: clamp(0.98rem, 5.5vw, 4.5rem);
  }
  & .bold {
    font-size: clamp(0.95rem, 5.2vw, 4.5rem);
    font-family: ${({ theme }) => theme.headFont};
  }
  & .ampersand {
    font-family: ${({ theme }) => theme.thinFont};
  }

  ${({ theme }) => theme.opaTranslate("X", "-300", "600")}
`;

export const StyledHero__Middle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & .title {
    font-size: clamp(1rem, 4vw, 3.5rem);
    font-family: ${({ theme }) => theme.thinFont};
    font-weight: 400;
  }
  & .bold {
    font-family: ${({ theme }) => theme.headFont3};
  }

  ${({ theme }) => theme.opaTranslate("X", "-300", "600")}
`;

export const StyledHero__End = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  & .title {
    font-size: clamp(1rem, 4vw, 3.5rem);
    font-family: ${({ theme }) => theme.thinFont};
  }
  & .bold {
    font-size: clamp(1.1rem, 4vw, 3.5rem);
    font-family: ${({ theme }) => theme.headFont};
  }
  & .ampersand {
    font-family: ${({ theme }) => theme.thinFont};
  }

  ${({ theme }) => theme.opaTranslate("X", "300", "600")}
`;

export const StyledAction = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  z-index: 2;
  position: relative;

  ${({ theme }) => theme.showComp("show")}

  ${mq("IPadPro", "min")} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.headFont3};
  ${mq("desktopS", "min")} {
    padding-left: 6rem;
    width: 63%;
    align-items: flex-start;
  }
  & h3 {
    line-height: 1;
    font-size: clamp(4.22rem, 17vw, 8rem);
  }
  & span {
    display: none;
    ${mq("desktopS", "min")} {
      display: flex;
      position: absolute;
      bottom: 0;
      align-self: flex-end;
      border-top: 1px solid white;
      border-left: 1px solid white;
      font-size: 1.3rem;
      padding: 1rem;
    }
  }
`;

export const StyledDescrip = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.thinFont};
`;

export const ColorLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(29, 29, 29, 0.7);
  position: absolute;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 240px;
  max-width: 334px;
  ${mq("tablet", "min")} {
    width: 300px;
    height: 325px;
    max-width: 334px;
  }
  ${mq("desktopS", "min")} {
    width: 25%;
    max-width: 25%;
  }
  & h3 {
    position: absolute;
    padding: 0.7rem 0 0.3rem 0.5rem;
    font-family: ${({ theme }) => theme.headFont2};
    ${mq("tiny", "min")} {
      width: 100%;
      font-size: clamp(1rem, 1.5vw + 1rem, 1.1rem);
    }
    ${mq("tablet", "min")} {
      width: 200px;
      font-size: clamp(1rem, 1.5vw + 1rem, 1.6rem);
      padding: 1.5rem 0 0 1.5rem;
    }
    &.trait {
      font-size: clamp(1rem, 1.5vw + 1rem, 1rem);
      ${mq("tablet", "min")} {
        font-size: clamp(1rem, 1.5vw + 1rem, 1.6rem);
      }
    }
  }
  & img {
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
`;

export const TraitsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
  top: 25px;
  padding: 0 0.6rem;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.mainFont};
  & span {
    border-bottom: 1px solid white;
    margin-bottom: 0.7rem;
    ${mq("tiny", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.16rem);
    }
    ${mq("tablet", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.4rem);
    }
    ${mq("desktopS", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
    }
  }
  ${mq("desktopS", "min")} {
    justify-content: center;
    top: 45px;
  }
`;

export const StyledWorkContainer = styled.div`
  ${mq("tiny", "min")} {
    margin: 0 1rem;
  }
`;

export const StyledWorkTitle = styled.div`
  width: 100%;
  padding: 0 1rem;
  font-size: clamp(2rem, 7vw, 4.8rem);
  font-family: ${({ theme }) => theme.headFont2};
  text-align: center;
  margin-top: 1rem;
  & h2 {
    margin-bottom: 1rem;
  }
  ${mq("desktopS", "min")} {
    text-align: left;
  }
`;

export const StyledWorkDescrip = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-family: ${({ theme }) => theme.thinFont};
  text-align: center;
  & p {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  ${mq("desktopS", "min")} {
    flex-direction: row;
    text-align: left;
  }
`;

export const StyledWorkImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
