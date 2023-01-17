import NavLinks from "./NavLinks";
import { HamburgerWrapper } from "../styles/Wrappers.styled";
import {
  StyledMobileNav,
  StyledHamburger,
  StyledClose,
} from "../styles/Header.styled";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  //can pass HandleClick() as prop
  const hamburgerIcon = <StyledHamburger onClick={() => setOpen(!open)} />;

  const closeIcon = <StyledClose onClick={() => setOpen(!open)} />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <StyledMobileNav>
      <HamburgerWrapper>{open ? closeIcon : hamburgerIcon}</HamburgerWrapper>
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </StyledMobileNav>
  );
}
