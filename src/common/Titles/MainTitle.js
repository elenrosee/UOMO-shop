import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 70px;
  line-height: 80px;
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
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

export const MainTitle = ({ description, title, accentTitle, link }) => {
  return (
    <TitleContainer>
      <Description>{description}</Description>
      <Title>{title}</Title>
      <AccentTitle>{accentTitle}</AccentTitle>
      <SlideLink to={link}>discover more</SlideLink>
    </TitleContainer>
  );
};
