import { useState, useEffect } from "react";
import Link from "next/link";
import { StyledImage, StyledHeader } from "../styles/Header.styled";
import {
  MaxHeaderWrapper,
  HeaderWrapper,
  LogoWrapper,
} from "../styles/Wrappers.styled";
//@ts-ignore
import LogoImg from "../../../assets/sse-logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <StyledHeader bg={colorChange}>
      <MaxHeaderWrapper bg={colorChange} />
      <HeaderWrapper>
        <LogoWrapper>
          <Link href={"/"}></Link>
          <StyledImage src={LogoImg} alt="This is the Logo of the site" />
        </LogoWrapper>
        <MobileNav />
        <DesktopNav />
      </HeaderWrapper>
    </StyledHeader>
  );
}
