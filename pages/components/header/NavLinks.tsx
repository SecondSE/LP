import { MobileNavList, MobileNavListItem } from "../styles/Header.styled";
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
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          WORK
        </MobileNavListItem>
        <MobileNavListItem onClick={() => isMobile && closeMobileMenu()}>
          CONTACT
        </MobileNavListItem>
      </MobileNavList>
    </MenuWrapper>
  );
};
export default NavLinks;
