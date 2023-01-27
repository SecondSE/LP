import GlobalStyle from "../components/styles/Global.styled";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import MetaHead from "../components/head/Head";

export default function Index() {
  return (
    <>
      <MetaHead />
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
