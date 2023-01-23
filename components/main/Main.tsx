import { StyledMain } from "../styles/Main.styled";
import Hero from "./Hero";
import Action from "./Action";
import Work from "./Work";
import Contact from "../contact/Contact";
import ClientHistory from "../clientHistory/ClientHistory";
import AboutUs from "../aboutUs/AboutUs";
import CaseProvider from "../../context/case/CaseProvider";
import useLoad from "../../hooks/useLoad";
import useScroll from "../../hooks/useScroll";
import useResize from "../../hooks/useResize";

export default function Main() {
  useLoad();
  useResize();
  useScroll();
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
