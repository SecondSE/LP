import {
  StyledDesktopNav,
  DesktopNavList,
  DesktopNavListItem,
} from "../styles/Header.styled";

export default function DesktopNav() {
  return (
    <StyledDesktopNav>
      <DesktopNavList>
        <DesktopNavListItem>SERVICES</DesktopNavListItem>
        <DesktopNavListItem>WORK</DesktopNavListItem>
        <DesktopNavListItem>CONTACT</DesktopNavListItem>
      </DesktopNavList>
    </StyledDesktopNav>
  );
}
