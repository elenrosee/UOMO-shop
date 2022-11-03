import { useContext } from "react";
import { SliderContext } from "./Slider";

import styled from "styled-components";

const SlideList = styled.div`
  display: flex;
  height: 100%;
  transition: 0.5s ease-in-out;
  transform: ${(props) => props.style.transform};
  width: 100%;
`;
const SlideWraper = styled.div`
  flex: 1 0 100%;
  position: relative;
`;
const SlideImg = styled.img`
  display: flex;
  margin: 0 auto;
  /* max-height: 300px;
  width: 100%; */
  object-fit: contain;
`;
const SlideTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <SlideList style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map(({ url, title }, index) => (
        <SlideWraper key={index}>
          <SlideImg src={url} alt={title} />
          <SlideTitle>{title}</SlideTitle>
        </SlideWraper>
      ))}
    </SlideList>
  );
};
