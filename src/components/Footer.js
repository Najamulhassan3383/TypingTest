import React from "react";
import styled from "@emotion/styled";
import Image from "./Image.svg";

function Footer() {
  return (
    <Container>
      <Text>Najam Ul Hassan</Text>
      <ImageContainer>
        <img src={Image} alt="pic" />
      </ImageContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  border-top: 1px solid #d5cdcd;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: #212121;
  color: #d5cdcd;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 1rem;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  font-family: "Roboto Mono", monospace;
`;
const ImageContainer = styled.div`
  width: 2rem;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
