import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Slider, SliderTrack, SliderFilledTrack } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Button } from "@chakra-ui/react";

const MySlider = (props) => {
  const [sliderValue, setSliderValue] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let timer;
    if (props.set) {
      timer = setTimeout(() => {
        if (sliderValue > 0) {
          setSliderValue(sliderValue - 1);
        } else {
          //stops the timer
          clearTimeout(timer);
          onOpen();
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [sliderValue, props.set, onClose]);

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

      {/* Render modal based on isOpen state */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Score</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>WPM: {props.cpm}</p>
            {/* <p>Accuracy: {props.accuracy}</p> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
