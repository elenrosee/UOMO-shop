import { useContext } from "react";
import { SliderContext } from "./Slider";
import { Breakpoints, MQ } from "common";

import styled from "styled-components";
import { SliderTitle } from "./SliderTitle";

const SlideList = styled.div`
  display: flex;
  height: 100%;
  transition: 0.5s ease-in-out;
  transform: ${(props) => props.style.transform};
  width: 100%;
`;
const SlideWraper = styled.div`
  flex: 1 0 100%;
  height: 600px;
  position: relative;

  ${MQ(Breakpoints.md)} {
    height: 800px;
  }
`;
const SlideImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <SlideList style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map(({ url, title, accentTitle, description, link }, index) => (
        <SlideWraper key={index}>
          <SlideImg src={url} alt={title} />
          <SliderTitle
            description={description}
            title={title}
            accentTitle={accentTitle}
            link={link}
          />
        </SlideWraper>
      ))}
    </SlideList>
  );
};
