import { Breakpoints, SingleProductItem } from "../../../common";
import { Product, productsData } from "../../../data/productsData";
import { FC, useCallback, useEffect, useState, TouchEvent } from "react";
import { useMediaQuery } from "react-responsive";

import {
  AccentTitle,
  Arrow,
  LimitedEditionContainer,
  ProductsBlock,
  SliderContainer,
  Title,
  TitleWrapper,
  Wrapper,
} from "./LimitedEdition.styled";

import { NextSvg, BackSvg } from "../../../icons";

interface LimitedEditionProps {
  autoPlay: boolean;
  autoPlayTime: number;
}

type ItemsArraySliderType = Product[][];

export const LimitedEdition: FC<LimitedEditionProps> = ({
  autoPlay = true,
  autoPlayTime = 5000,
}) => {
  const [items, setItems] = useState<ItemsArraySliderType>([]);
  const [slide, setSlide] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const isTablet = useMediaQuery({ minWidth: Breakpoints.md });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.lg });

  useEffect(() => {
    let arrayViewLength: number;

    if (isDesctop) {
      arrayViewLength = 4;
    } else if (isTablet) {
      arrayViewLength = 4;
    } else {
      arrayViewLength = 2;
    }

    const loadData = () => {
      const itemsSubarray: ItemsArraySliderType = [];

      for (
        let i = 0;
        i < Math.ceil(productsData.length / arrayViewLength);
        i++
      ) {
        itemsSubarray[i] = productsData.slice(
          i * arrayViewLength,
          i * arrayViewLength + arrayViewLength,
        );
      }

      setItems(itemsSubarray);
    };

    loadData();
  }, [isDesctop, isTablet]);

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

  return (
    <LimitedEditionContainer>
      <TitleWrapper>
        <Title>limited&nbsp;</Title>
        <AccentTitle>edition</AccentTitle>
      </TitleWrapper>
      <Arrow className="backBtn" onClick={() => changeSlide(-1)}>
        <BackSvg />
      </Arrow>
      <SliderContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Wrapper style={{ transform: `translateX(-${slide * 100}%)` }}>
          {items.map((item, index) => (
            <ProductsBlock key={index}>
              {item.map((i) => (
                <SingleProductItem item={i} key={i.id} />
              ))}
            </ProductsBlock>
          ))}
        </Wrapper>
      </SliderContainer>
      <Arrow className="nextBtn" onClick={() => changeSlide(1)}>
        <NextSvg />
      </Arrow>
    </LimitedEditionContainer>
  );
};
