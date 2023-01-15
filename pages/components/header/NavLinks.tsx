import {
  MobileNavList,
  MobileNavListItem,
  NavListLink,
} from "../styles/Header.styled";
import { MenuWrapper } from "../styles/Wrappers.styled";
import { Link } from "react-scroll";

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
<<<<<<< HEAD
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
=======
        <MobileNavListItem>
          <Link
            to="Services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => isMobile && closeMobileMenu()}
          >
            SERVICES
          </Link>
>>>>>>> origin/development
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          WORK
          <NavListLink
            href="#work"
            aria-label="navigation link to work section"
          />
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
<<<<<<< HEAD
          CONTACT
          <NavListLink
            href="#contact"
            aria-label="navigation link to contact section"
          />
=======
          ABOUT
        </MobileNavListItem>
        <MobileNavListItem>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => isMobile && closeMobileMenu()}
          >
            CONTACT
          </Link>
>>>>>>> origin/development
        </MobileNavListItem>
      </MobileNavList>
    </MenuWrapper>
  );
};
export default NavLinks;
