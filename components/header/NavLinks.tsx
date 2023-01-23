import { MobileNavList, MobileNavListItem } from "../styles/Header.styled";
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
    <MobileNavList>
      <MobileNavListItem>
        SERVICES
        <Link
          onClick={() => isMobile && closeMobileMenu()}
          to="sec-services"
          smooth={true}
          offset={-50}
          duration={500}
        />
      </MobileNavListItem>
      <MobileNavListItem>
        WORK
        <Link
          onClick={() => isMobile && closeMobileMenu()}
          to="sec-work"
          smooth={true}
          offset={-50}
          duration={500}
        />
      </MobileNavListItem>
      <MobileNavListItem>
        ABOUT
        <Link
          onClick={() => isMobile && closeMobileMenu()}
          to="sec-about"
          smooth={true}
          offset={-80}
          duration={500}
        />
      </MobileNavListItem>
      <MobileNavListItem>
        CONTACT
        <Link
          onClick={() => isMobile && closeMobileMenu()}
          to="sec-contact"
          smooth={true}
          offset={-95}
          duration={500}
        />
      </MobileNavListItem>
    </MobileNavList>
  );
};
export default NavLinks;
