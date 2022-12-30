import styled from "styled-components";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import mq from "../../../utils/mq";

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  height: 70px;
  z-index: 1;
  font-family: ${({ theme }) => theme.headFont};
`;

export const StyledImage = styled(Image)`
  width: 160px;
  height: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
`;

export const StyledMobileNav = styled.nav`
  ${mq("tablet", "min")} {
    display: none;
  }
`;

export const StyledDesktopNav = styled.nav`
  ${mq("tablet", "min")} {
    height: 100%;
    display: flex;
    background-color: transparent;
    position: static;
    margin-top: 0;
  }
`;

export const MobileNavList = styled.ul`
  font-size: 2rem;
  list-style-type: none;
  height: 100vh;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
`;

export const MobileNavListItem = styled.li`
  margin-bottom: 3rem;
  ${mq("tablet", "min")} {
    margin: 0 1rem 0 0;
  }
`;

export const DesktopNavList = styled.ul`
  display: none;
  ${mq("tablet", "min")} {
    display: flex;
    list-style-type: none;
    font-size: 1.5rem;
    justify-content: flex-end;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: transparent;
    flex-direction: row;
  }
`;

export const DesktopNavListItem = styled.li`
  ${mq("tablet", "min")} {
    margin: 0 1rem 0 0;
  }
`;

export const StyledHamburger = styled(RxHamburgerMenu)`
  width: 25px;
  height: 25px;
`;

export const StyledClose = styled(IoMdClose)`
  width: 25px;
  height: 25px;
  z-index: 2;
`;
