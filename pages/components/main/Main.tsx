import { StyledMain, StyledImage } from "../styles/Main.styled";
import Hero from "../main/Hero";
import Action from "../main/Action";
import sanHolo from "../../../assets/san-holo.png";

export default function Main() {
  return (
    <StyledMain>
      <Hero />
      <Action />
    </StyledMain>
  );
}
