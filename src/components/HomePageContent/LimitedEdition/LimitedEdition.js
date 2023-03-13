import { Breakpoints, SingleProductItem } from "common";
import { productsData } from "data/productsData";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Arrows } from "./Arrows";
import {
  AccentTitle,
  LimitedEditionContainer,
  ProductsBlock,
  SliderContainer,
  Title,
  TitleWrapper,
  Wrapper,
} from "./LimitedEdition.styled";

export const LimitedEdition = ({
  width,
  height,
  autoPlay = true,
  autoPlayTime = 5000,
}) => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const isTablet = useMediaQuery({ minWidth: Breakpoints.md });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.lg });

  useEffect(() => {
    // const arrayViewLength =  isDesctop ? 4 : 2

    let arrayViewLength;

    if (isDesctop) {
      arrayViewLength = 4;
    } else if (isTablet) {
      arrayViewLength = 3;
    } else {
      arrayViewLength = 2;
    }

    const loadData = () => {
      const itemsSubarrey = [];

      for (
        let i = 0;
        i < Math.ceil(productsData.length / arrayViewLength);
        i++
      ) {
        itemsSubarrey[i] = productsData.slice(
          i * arrayViewLength,
          i * arrayViewLength + arrayViewLength
        );
      }

      setItems(itemsSubarrey);
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
    [items.length, slide]
  );

  //   const goToSlide = (number) => {
  //     setSlide(number % items.length)
  //   }

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

  return (
    <LimitedEditionContainer>
      <TitleWrapper>
        <Title>limited&nbsp;</Title>
        <AccentTitle>edition</AccentTitle>
      </TitleWrapper>
      <Arrows changeSlide={changeSlide} />
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
    </LimitedEditionContainer>
  );
};
