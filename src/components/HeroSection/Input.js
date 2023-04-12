import React from "react";
import styled from "@emotion/styled";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import { configure, prettyDOM } from "@testing-library/react";
let words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed quasi architecto quod inventore accusamus aliquid eum commodi consequuntur excepturi eligendi nisi dolores veritatis facilis quibusdam quas incidunt ipsam cumque?";
words = words.split(" ");

function InputComp(props) {
  const [inputText, setInputText] = useState("");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    let word = e.target.value;
    const last_char = word[word.length - 1];
    word = word.trim();
    if (!props.typing) {
      console.log("typing");
      props.setTyping((prev) => !prev);
    }

    if (last_char === " ") {
      if (word && word === words[props.index]) {
        props.setRes(true);
        console.log("correct");
      } else {
        props.setRes(false);
        console.log("incorrect");
      }

      setInputText("");
      props.setindex((prev) => prev + 1);
    } else {
      setInputText(word);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder=""
        value={inputText}
        onChange={handleChange}
        ref={inputRef}
        style={{
          color: inputText === words[props.index] ? "green" : "inherit",
        }}
      />
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
