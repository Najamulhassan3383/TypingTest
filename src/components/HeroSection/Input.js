import React from "react";
import styled from "@emotion/styled";
import { RepeatClockIcon } from "@chakra-ui/icons";

function InputComp() {
  return (
    <Container>
      <Input type="text" placeholder="" />
      <Button>
        <RepeatClockIcon />
      </Button>
    </Container>
  );
}

export default InputComp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #353441;
  color: #d5cdcd;
  margin: 0rem 0rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 1rem;
  font-family: "Roboto Mono", monospace;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: #212121;
  color: #d5cdcd;

  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 1rem;
  font-family: "Roboto Mono", monospace;
  border: none;
  outline: none;
  &:focus {
    border: 2px solid #61dafb;
  }
`;

const Button = styled.button`
  width: 6rem;
  margin-left: 1rem;
  height: 3rem;
  background: #212121;
  color: #d5cdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 1rem;
  font-family: "Roboto Mono", monospace;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
