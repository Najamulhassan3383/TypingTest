// import logo from "./logo.svg";
// import { Container } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "@emotion/styled";
import MainHero from "./components/HeroSection/MainHero";
import Footer from "./components/Footer";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");

  const handleIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <MainContainer>
      <Screen>
        <NavBar />
        <MainHero setIndex={handleIndex} word={setTypedWord} />
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
  overflow: scroll;
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
