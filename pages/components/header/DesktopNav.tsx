import {
  StyledDesktopNav,
  DesktopNavList,
  DesktopNavListItem,
  // NavListLink,
} from "../styles/Header.styled";
import { Link } from "react-scroll";

export default function DesktopNav() {
  return (
    <StyledDesktopNav>
      <DesktopNavList>
        <DesktopNavListItem>
          SERVICES
          <Link to="sec-services" smooth={true} offset={-50} duration={500} />
        </DesktopNavListItem>
        <DesktopNavListItem>
          WORK
          <Link to="sec-work" smooth={true} offset={-50} duration={500} />
        </DesktopNavListItem>
        <DesktopNavListItem>
          ABOUT
          <Link to="sec-about" smooth={true} offset={-95} duration={500} />
        </DesktopNavListItem>
        <DesktopNavListItem>
          CONTACT
          <Link to="sec-contact" smooth={true} offset={-150} duration={500} />
        </DesktopNavListItem>
      </DesktopNavList>
    </StyledDesktopNav>
  );
}
