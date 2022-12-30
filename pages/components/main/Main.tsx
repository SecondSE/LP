import { StyledMain, StyledImage } from "../styles/Main.styled";
import Hero from "../main/Hero";
import Action from "../main/Action";
import Contact from "../contact/Contact";
import ClientHistory from "../clientHistory/ClientHistory";
import AboutUs from "../aboutUs/AboutUs";
import sanHolo from "../../../assets/san-holo.png";

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <Action />
      <AboutUs />
      <ClientHistory />
      <Contact />
    </StyledMain>
  );
}
