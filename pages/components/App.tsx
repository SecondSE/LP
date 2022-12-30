import GlobalStyle from "./styles/Global.styled";
import Header from "../components/header/Header";
import Main from "./main/Main";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
