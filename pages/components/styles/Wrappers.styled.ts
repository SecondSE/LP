import styled from "styled-components";
import mq from "../../../utils/mq";

interface WrapperProps {
  bg: boolean;
}

export const MaxHeaderWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  border-top: ${({ bg }) => (bg ? "0" : "1px solid white")};
  border-bottom: ${({ bg }) => (bg ? "0" : "1px solid white")};
  z-index: -1;
`;

/* background-color: ${({ bg }) => (bg ? "black" : "transparent")}; */
// background: rgb(29,29,29);
// background: linear-gradient(90deg, rgba(29,29,29,1) 0%, rgba(29,29,29,1) 98%); */

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1600px;
  ${mq("tablet", "min")} {
    justify-content: flex-start;
    padding: 0 3rem;
  }
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
  height: 100vh;
  position: absolute;
  top: 0;
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
  height: 100vh;
  width: 100%;
`;

export const ActionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
  max-width: 1600px;
  ${mq("desktopS", "min")} {
    flex-direction: row;
    margin: 0 auto;
    padding: 0 3rem;
    z-index: 2;
    border-top: 1px solid white;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  font-family: ${({ theme }) => theme.mainFont};
  ${mq("desktopS", "min")} {
    border-left: solid 1px white;
    width: 45%;
    padding: 2rem 0 2rem 2rem;
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
    margin: 0;
    padding: 0 3rem;
    max-width: 100%;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const WorkWrapper = styled.section`
  width: 100%;
  border-top: 1px solid white;
`;

export const WorkImageWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
