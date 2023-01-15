import Link from "next/link";
import {
  StyledDesktopNav,
  DesktopNavList,
  DesktopNavListItem,
  NavListLink,
} from "../styles/Header.styled";

export default function DesktopNav() {
  return (
    <StyledDesktopNav>
      <DesktopNavList>
        <DesktopNavListItem>
          SERVICES
          <NavListLink
            href="#services"
            aria-label="navigation link to services section"
          />
        </DesktopNavListItem>
        <DesktopNavListItem>
          ABOUT
          <NavListLink
            href="#about"
            aria-label="navigation link to about section"
          />
        </DesktopNavListItem>
        <DesktopNavListItem>
          WORK
          <NavListLink
            href="#work"
            aria-label="navigation link to work section"
          />
        </DesktopNavListItem>
        <DesktopNavListItem>
          CONTACT
          <NavListLink
            href="#contact"
            aria-label="navigation link to contact"
          />
        </DesktopNavListItem>
      </DesktopNavList>
    </StyledDesktopNav>
  );
}
