import { FC, TouchEvent, useCallback, useEffect, useState } from "react";

import { Dots } from "./Dots";
import { SlidesList } from "./SlidesList";
import { SliderContainer, SliderWraper } from "./Slider.styled";
import { useMediaQuery } from "react-responsive";
import { images } from "../../../data/sliderData";
import { Breakpoints } from "../../../common";
import { FollowUs } from "../FollowUs";
import { SliderProvider } from "./SliderProvider";

type SliderProps = {
  autoPlay: boolean;
  autoPlayTime: number;
};
export type SliderItemsInfo = {
  accentTitle: string;
  description: string;
  img: string;
  link: string;
  mobImg: string;
  title: string;
};

export const Slider: FC<SliderProps> = ({ autoPlay, autoPlayTime = 3000 }) => {
  const [items, setItems] = useState<SliderItemsInfo[]>([]);
  const [slide, setSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

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
    [items.length, slide],
  );

  const goToSlide = (number: number): void => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
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
        <SliderProvider
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
        </SliderProvider>
      </SliderWraper>
    </SliderContainer>
  );
};
