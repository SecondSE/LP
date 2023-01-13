import {
  StyledDesktopNav,
  DesktopNavList,
  DesktopNavListItem,
} from "../styles/Header.styled";
import { Link } from "react-scroll";

export default function DesktopNav() {
  return (
    <StyledDesktopNav>
      <DesktopNavList>
        <DesktopNavListItem>
          <Link
            to="Services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            SERVICES
          </Link>
        </DesktopNavListItem>
        <DesktopNavListItem>
          <Link to="Work" spy={true} smooth={true} offset={-100} duration={500}>
            WORK
          </Link>
        </DesktopNavListItem>
        <DesktopNavListItem>
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            ABOUT
          </Link>
        </DesktopNavListItem>
        <DesktopNavListItem>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACT
          </Link>
        </DesktopNavListItem>
      </DesktopNavList>
    </StyledDesktopNav>
  );
}
