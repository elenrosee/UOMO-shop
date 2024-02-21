import { useContext } from "react";
import { Dot, DotsContainer } from "./Dots.styled";
import { SliderContext } from "./SliderProvider";

const style = {};

export const Dots = () => {
  const { slidesCount, goToSlide, slideNumber } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <Dot
          key={`dot-${i}`}
          style={style}
          className={`${slideNumber === i ? "selected" : ""}`}
          onClick={() => goToSlide(i)}
        >
          <span></span>
        </Dot>,
      );
    }

    return dots;
  };

  return <DotsContainer>{renderDots()}</DotsContainer>;
};
