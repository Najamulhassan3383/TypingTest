// import logo from "./logo.svg";
// import { Container } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "@emotion/styled";
import MainHero from "./components/HeroSection/MainHero";
import Footer from "./components/Footer";

function App() {
  return (
    <MainContainer>
      <Screen>
        <NavBar />
        <MainHero />
        <Footer />
      </Screen>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background: #212121;
  width: 100vw;
  height: 100vh;
`;

const Screen = styled.div`
  background: #212121;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
