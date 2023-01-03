import styled from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
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
  top: 25%;
  height: 50%;
  width: 100%;
  gap: 10%;
  padding: 0 1rem;
  ${mq("desktopS", "min")} {
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
    font-size: clamp(0.8rem, 4.9vw, 4.5rem);
  }
  & .experience {
    font-size: clamp(0.8rem, 4.9vw, 4.5rem);
  }
  & .bold {
    font-family: ${({ theme }) => theme.headFont};
  }
  & .ampersand {
    font-family: ${({ theme }) => theme.thinFont};
  }
`;

export const StyledHero__Middle = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  & .title {
    font-size: clamp(1rem, 3.5vw, 2.5rem);
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
    font-size: clamp(1rem, 3.5vw, 3.5rem);
    font-family: ${({ theme }) => theme.thinFont};
  }
  & .bold {
    font-size: clamp(1rem, 3.5vw, 3.5rem);
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
  border-top: 1px solid white;
  ${mq("IPadPro", "min")} {
    flex-direction: column;
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
    font-size: clamp(3.22rem, 17vw, 8rem);
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
  font-size: clamp(1rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.thinFont};
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
    font-size: clamp(13px, 3vw, 2rem);
    padding: 0.7rem 0 0.3rem 0.7rem;
    font-family: ${({ theme }) => theme.headFont2};
  }
`;

export const TraitsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 91%;
  width: 100%;
  top: 25px;
  justify-content: flex-end;
  padding: 0.7rem;
  font-family: ${({ theme }) => theme.thinFont};
  /* display: none; */
  & span {
    border-bottom: 1px solid white;
    margin-bottom: 0.7rem;
    font-size: clamp(13px, 6vw, 18px);
  }
  ${mq("desktopS", "min")} {
    justify-content: flex-end;
  }
  ${mq("customX", "min")} {
    justify-content: center;
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
