import styled from "styled-components";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import mq from "../../../utils/mq";
import Link from "next/link";

interface WrapperProps {
  bg: boolean;
}

export const StyledHeader = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  max-width: 1600px;

  ${mq("tablet", "min")} {
    justify-content: flex-start;
    padding: 0 3rem;
    margin: 0 auto;
  }
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
  height: calc(3rem + 100vh);
  width: 50%;
  position: absolute;
  top: -1.5rem;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const MobileNavListItem = styled.li`
  position: relative;
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
  position: relative;
  ${mq("tablet", "min")} {
    margin: 0 1rem 0 0;
  }
`;

export const NavListLink = styled(Link)`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
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
