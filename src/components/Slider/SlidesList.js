import { useContext } from "react";
import { SliderContext } from "./Slider";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SlideList = styled.div`
  display: flex;
  height: 100%;
  transition: 0.5s ease-in-out;
  transform: ${(props) => props.style.transform};
  width: 100%;
`;
const SlideWraper = styled.div`
  flex: 1 0 100%;
  height: 800px;
  position: relative;
`;
const SlideImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 290px;
  left: 195px;

  text-transform: uppercase;
`;
const Description = styled.p`
  font-weight: 500;
  color: #c32929;
  position: relative;

  padding-left: 53px;

  &::before {
    content: "";
    display: block;

    width: 40px;
    height: 2px;
    background-color: #c32929;

    position: absolute;
    top: 8px;
    left: 0px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 70px;
  line-height: 80px;
`;

const SlideLink = styled(NavLink)`
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    background-color: black;
    width: 100px;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
`;

const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <SlideList style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map(({ url, title, accentTitle, description, link }, index) => (
        <SlideWraper key={index}>
          <SlideImg src={url} alt={title} />
          <TitleContainer>
            <Description>{description}</Description>
            <Title>{title}</Title>
            <AccentTitle>{accentTitle}</AccentTitle>
            <SlideLink to={link}>discover more</SlideLink>
          </TitleContainer>
        </SlideWraper>
      ))}
    </SlideList>
  );
};
