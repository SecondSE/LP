import styled from "styled-components";
import mq from "../../../utils/mq";

interface WrapperProps {
  bg: boolean;
}

export const MaxWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${mq("desktopS", "min")} {
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export const MaxHeaderWrapper = styled.header<WrapperProps>`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  position: fixed;
  border-top: ${({ bg }) => (bg ? "0" : "1px solid white")};
  border-bottom: ${({ bg }) => (bg ? "0" : "1px solid white")};
  font-family: ${({ theme }) => theme.headFont3};
  background-color: ${({ bg }) => (bg ? "rgba(29,29,29,0.8)" : "transparent")};
  backdrop-filter: blur(5px);
  z-index: 3;
  transition-duration: ${({ bg }) => (bg ? "1s" : "1s")};
  transition-property: transform;
  transform: ${({ bg }) => (bg ? "translatey(-1rem)" : "1rem")};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 100%;
  ${mq("tablet", "min")} {
    justify-content: flex-start;
  }
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mq("tablet", "min")} {
    justify-content: flex-start;
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  width: 100vw;
  height: calc(3rem + 100vh);
  position: absolute;
  top: -1.5rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const HeroWrapper = styled.div`
  max-width: 1600px;
  height: 99.9%;
  width: 100%;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  & img {
    height: 110vh;
  }
`;

export const ActionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  max-width: 1600px;
  ${mq("desktopS", "min")} {
    flex-direction: row;
    z-index: 2;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  text-align: center;
  font-family: ${({ theme }) => theme.mainFont};
  ${mq("tablet", "min")} {
    padding: 0 3rem;
  }
  ${mq("desktopS", "min")} {
    border-left: solid 1px white;
    width: 37%;
    padding: 2rem 3rem 2rem 2rem;
    text-align: left;
  }
`;

export const MaxActionImageWrapper = styled.div`
  ${mq("desktopS", "min")} {
    width: 100%;
    margin: 0 auto;
    padding: 0 3.1rem;
  }
`;
export const ActionImageWrapper = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  gap: 1rem;
  ${mq("desktopS", "min")} {
    gap: 0;
    margin: 0 auto;
    max-width: 1600px;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const WorkWrapper = styled.section`
  padding-top: 2rem;
  width: 100%;
  ${mq("desktopS", "min")} {
    border-top: 1px solid white;
    padding: 2rem 3rem 0 3rem;
  }
`;

export const WorkImageWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
