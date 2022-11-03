import { useContext } from "react";
import { SliderContext } from "./Slider";

const style = {
  width: "40px",
  height: "40px",
  margin: "10px",
};

export const Dots = () => {
  const { slidesCount, goToSlide, slideNumber } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <button
          key={`dot-${i}`}
          type={"radio"}
          style={style}
          className={`dot ${slideNumber === i ? "selected" : ""}`}
          onClick={() => goToSlide(i)}
        >
          <p>{i}</p>
        </button>
      );
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
};
