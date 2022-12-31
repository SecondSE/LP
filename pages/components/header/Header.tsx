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
  return (
    <StyledHeader>
      <MaxHeaderWrapper />
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
