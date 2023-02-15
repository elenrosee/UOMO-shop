import { createContext, useCallback, useEffect, useState } from "react";
import { FollowUs } from "./FollowUs";

import { images } from "data/sliderData";
import { Dots } from "./Dots";
import { SlidesList } from "./SlidesList";

import { SliderContainer, SliderWraper } from "./Slider.styled";
import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "common";

export const SliderContext = createContext();

export const Slider = ({ width, height, autoPlay, autoPlayTime = 3000 }) => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    // const loadData = async () => {
    //   const images = await getImages()
    //   setItems(images)
    // }
    // loadData()

    const loadData = () => {
      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
        slideNumber = items.length - 1;
      } else {
        slideNumber = (slide + direction) % items.length;
      }

      setSlide(slideNumber);
    },
    [items.length, slide]
  );

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide, autoPlay, autoPlayTime, changeSlide]); // when images uploaded or slide changed manually we start timer

  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <SliderContainer>
      {isDesctop && <FollowUs />}
      <SliderWraper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <SlidesList />
          <Dots />
        </SliderContext.Provider>
      </SliderWraper>
    </SliderContainer>
  );
};
