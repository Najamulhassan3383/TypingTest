import React from "react";
import MySlider from "./Slider";
import styled from "@emotion/styled";
import InputComp from "./Input";

let words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed quasi architecto quod inventore accusamus aliquid eum commodi consequuntur excepturi eligendi nisi dolores veritatis facilis quibusdam quas incidunt ipsam cumque?";

function MainHero() {
  return (
    <div>
      <MySlider />
      <Hero>
        <Stylingscontainer>
          <HeroText>
            {[...words].map((word, index) => {
              return <span key={index}>{word === " " ? "\u00A0" : word}</span>;
            })}
          </HeroText>
          <InputComp />
        </Stylingscontainer>
      </Hero>
    </div>
  );
}

export default MainHero;

const Hero = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 100%;
  background: #353441;
  color: #d5cdcd;

  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 1rem;
`;

const HeroText = styled.div`
  width: 100%;
  height: 100%;
  background: #353441;
  color: #d5cdcd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0 1rem;
  font-family: "Roboto Mono", monospace;
`;
const Stylingscontainer = styled.div`
    width: 100%;
    height: 100%;
    background: #353441;
    color: #d5cdcd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
    padding: 0 1rem;
    font-family: "Roboto Mono", monospace;
    }
`;
