import { StyledMain, StyledImage } from "../styles/Main.styled";
import Hero from "../main/Hero";
import Action from "../main/Action";
import Work from "../main/Work";
import Contact from "../contact/Contact";
import ClientHistory from "../clientHistory/ClientHistory";
import AboutUs from "../aboutUs/AboutUs";
import CaseProvider from "../../../context/case/CaseProvider";

export default function Main() {
  return (
    <CaseProvider>
      <StyledMain>
        <Hero />
        <Action />
        <Work />
        <AboutUs />
        <ClientHistory />
        <Contact />
      </StyledMain>
    </CaseProvider>
  );
}
