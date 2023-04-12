import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Slider, SliderTrack, SliderFilledTrack } from "@chakra-ui/react";

const MySlider = (props) => {
  const [sliderValue, setSliderValue] = useState(60);
  useEffect(() => {
    let timer;
    if (props.set) {
      timer = setTimeout(() => {
        if (sliderValue > 0) {
          setSliderValue(sliderValue - 1);
        } else {
          setSliderValue(60);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [sliderValue, props.set]);
  return (
    <Container>
      <Text>
        Time Left:
        <Span>{sliderValue}</Span>
      </Text>
      <SliderContainer>
        <Slider
          aria-label="slider-ex-1"
          value={sliderValue}
          min={0}
          max={60}
          step={1}
          onChange={(value) => {
            console.log(value);
            setSliderValue(value);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
      </SliderContainer>
    </Container>
  );
};

export default MySlider;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: #353441;
  color: #d5cdcd;
  border-radius: 5px;
  padding: 0 1rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SliderContainer = styled.div`
  flex: 1;

  .chakra-slider {
    width: 100%;
    height: 2px;
    background: #353441;
    border-radius: 5px;
  }

  .chakra-slider__track {
    height: 2px;
    background: #353441;
    border-radius: 5px;
  }

  .chakra-slider__filled-track {
    background: #61dafb;
  }
`;
