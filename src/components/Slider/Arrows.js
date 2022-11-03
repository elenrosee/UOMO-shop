import { useContext } from "react";
import { SliderContext } from "./Slider";

export const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <button className="arrow left" onClick={() => changeSlide(-1)}>
        LEFT
      </button>
      <button className="arrow right" onClick={() => changeSlide(1)}>
        RIGHT
      </button>
    </div>
  );
};
