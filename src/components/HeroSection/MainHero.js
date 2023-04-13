import React from "react";
import MySlider from "./Slider";
import styled from "@emotion/styled";
import InputComp from "./Input";
import { useRef } from "react";

let words =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed quasi architecto quod inventore accusamus aliquid eum commodi consequuntur excepturi eligendi nisi dolores veritatis facilis quibusdam quas incidunt ipsam cumque?";

function MainHero(props) {
  const [correct, setCorrect] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const [startedTyping, setStartedTyping] = React.useState(false);

  const spanRerefs = useRef([]);

  React.useEffect(() => {
    if (index === 0) {
      spanRerefs.current[0].style.color = "yellow";
    } else if (correct && index > 0) {
      spanRerefs.current[index - 1].style.color = "green";
      spanRerefs.current[index].style.color = "yellow";
    } else if (!correct && index > 0) {
      spanRerefs.current[index - 1].style.color = "red";
      spanRerefs.current[index].style.color = "yellow";
    }
  }, [correct, index]);

  return (
    <div>
      <MySlider set={startedTyping} cpm={props.cpm} />
      <Hero>
        <Stylingscontainer>
          <HeroText>
            {words.split(" ").map((word, i) => (
              <span
                key={i}
                ref={(el) => (spanRerefs.current[i] = el)}
                style={{ color: "inherit" }}
              >
                {word + "\u00A0"}
              </span>
            ))}
          </HeroText>
          <InputComp
            setindex={setIndex}
            word={props.word}
            setRes={setCorrect}
            index={index}
            setTyping={setStartedTyping}
            typing={startedTyping}
            count={props.count}

            // f={spanRerefs}
          />
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
    overflow: scroll;
    }
`;
