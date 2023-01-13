import { MobileNavList, MobileNavListItem } from "../styles/Header.styled";
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
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          WORK
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
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
        </MobileNavListItem>
      </MobileNavList>
    </MenuWrapper>
  );
};
export default NavLinks;
