import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const BorderWrapper = styled.div`
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const LeftBorder = styled.div`
  position: absolute;
  top: 0;
  left: 1.5rem;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  tranform-origin: top;
`;

export const RightBorder = styled.div`
  position: absolute;
  top: 0;
  right: 1.5rem;
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
  ${mq("tablet", "min")} {
    padding: 0 3rem;
  }
`;

export const StyledHero = styled.section`
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
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
`;

export const StyledAction = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  ${mq("IPadPro", "min")} {
    flex-direction: column;
  }
  ${mq("desktopS", "min")} {
    border-top: 1px solid white;
  }
`;

export const StyledTitle = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.headFont2};
  ${mq("desktopS", "min")} {
    width: 95%;
    align-items: flex-start;
  }
  & h3 {
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
  background-color: rgba(29, 29, 29, 0.5);
  position: absolute;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 245px;
  max-width: 334px;
  ${mq("tablet", "min")} {
    width: 300px;
    max-width: 334px;
  }
  ${mq("desktopS", "min")} {
    width: 25%;
    max-width: 25%;
    border-left: 2px solid white;
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
`;

export const TraitsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 91%;
  width: 100%;
  top: 25px;
  padding: 0 0.6rem;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.thinFont};
  /* display: none; */
  & span {
    border-bottom: 1px solid white;
    margin-bottom: 0.7rem;
    ${mq("tiny", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.2rem);
    }
    ${mq("tablet", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.4rem);
    }
    ${mq("desktopS", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.3rem);
    }
    ${mq("customX", "min")} {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
    }
  }
  ${mq("customX", "min")} {
    justify-content: center;
    top: 45px;
  }
`;

export const StyledWorkContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const StyledWorkTitle = styled.div`
  width: 100%;
`;

export const StyledWorkDescrip = styled.div`
  width: 100%;
`;

export const StyledWorkImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
