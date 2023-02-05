import { Breakpoints, MQ } from "common";
import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "./Slider";

const style = {};

const DotsContainer = styled.div`
  position: absolute;

  left: 30px;
  bottom: 30px;

  ${MQ(Breakpoints.md)} {
    left: 195px;
    bottom: 60px;
  }
`;

const Dot = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border: none;

  & span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 30%);
  }

  &.selected {
    border: 2px solid black;
    border-radius: 100px;

    & span {
      background-color: rgba(0, 0, 0, 100%);
    }
  }
`;

export const Dots = () => {
  const { slidesCount, goToSlide, slideNumber } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          type={"radio"}
          style={style}
          className={`${slideNumber === i ? "selected" : ""}`}
          onClick={() => goToSlide(i)}
        >
          <span></span>
        </Dot>
      );
    }

    return dots;
  };

  return <DotsContainer>{renderDots()}</DotsContainer>;
};
