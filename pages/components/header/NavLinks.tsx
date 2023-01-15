import {
  MobileNavList,
  MobileNavListItem,
  NavListLink,
} from "../styles/Header.styled";
import { MenuWrapper } from "../styles/Wrappers.styled";

interface NavLinkProps {
  isMobile: boolean;
  closeMobileMenu: () => void;
}

const NavLinks: React.FC<NavLinkProps> = function ({
  isMobile,
  closeMobileMenu,
}) {
  return (
    <MenuWrapper>
      <MobileNavList>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          SERVICES
          <NavListLink
            href="#services"
            aria-label="navigation link to services section"
          />
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          ABOUT
          <NavListLink
            href="#about"
            aria-label="navigation link to about section"
          />
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          WORK
          <NavListLink
            href="#work"
            aria-label="navigation link to work section"
          />
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          CONTACT
          <NavListLink
            href="#contact"
            aria-label="navigation link to contact section"
          />
        </MobileNavListItem>
      </MobileNavList>
    </MenuWrapper>
  );
};
export default NavLinks;
