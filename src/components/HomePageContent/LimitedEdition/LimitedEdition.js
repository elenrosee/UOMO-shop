import { Breakpoints, MQ, SingleProductItem } from "common";
import { productsData } from "data/productsData";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// import { Arrows } from './Arrows'
import {
  AccentTitle,
  LimitedEditionContainer,
  ProductsBlock,
  SliderContainer,
  Title,
  TitleWrapper,
  Wrapper,
} from "./LimitedEdition.styled";

import { NextSvg, BackSvg } from "icons";
import styled from "styled-components";

export const Arrow = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid #e4e4e4;
  border-radius: 20px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 15px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;

    & svg {
      height: 25px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &.backBtn {
    position: absolute;
    left: 5px;
    top: 50%;

    z-index: 1;

    ${MQ(Breakpoints.md)} {
      left: 10%;
    }
  }

  &.nextBtn {
    position: absolute;
    right: 5px;
    top: 50%;

    z-index: 1;

    ${MQ(Breakpoints.md)} {
      right: 10%;
    }
  }
`;

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
      {/* <Arrows changeSlide={changeSlide} /> */}
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
      </SliderContainer>{" "}
      <Arrow className="nextBtn" onClick={() => changeSlide(1)}>
        <NextSvg />
      </Arrow>
    </LimitedEditionContainer>
  );
};
