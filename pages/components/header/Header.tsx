import { useState, useEffect } from "react";
import Link from "next/link";
import { StyledHeader, StyledImage } from "../styles/Header.styled";
import { MaxHeaderWrapper, LogoWrapper } from "../styles/Wrappers.styled";
//@ts-ignore
import LogoImg from "../../../public/imgs/sse-logo.png";
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
    <MaxHeaderWrapper id="header" bg={colorChange}>
      <StyledHeader bg={colorChange}>
        <LogoWrapper>
          <Link href={"/"} aria-label="This is the logo of the site"></Link>
          <StyledImage src={LogoImg} alt="This is the Logo of the site" />
        </LogoWrapper>
        <MobileNav />
        <DesktopNav />
      </StyledHeader>
    </MaxHeaderWrapper>
  );
}
