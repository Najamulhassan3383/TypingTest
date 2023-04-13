// import logo from "./logo.svg";
// import { Container } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "@emotion/styled";
import MainHero from "./components/HeroSection/MainHero";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [numofWords, setNumofWords] = useState(0);

  const characterPerMinute = numofWords / 5;
  return (
    <MainContainer>
      <Screen>
        <NavBar />
        <MainHero count={setNumofWords} cpm={characterPerMinute} />
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
