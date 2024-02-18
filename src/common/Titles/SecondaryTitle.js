import styled from "styled-components";

import { Link } from "react-router-dom";
import { Breakpoints, MQ } from "../../common";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  bottom: 0;

  margin: 30px;

  text-transform: uppercase;

  ${MQ(Breakpoints.md)} {
    margin: 40px;
  }
`;

const Description = styled.span`
  font-weight: 500;
  text-transform: uppercase;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;

  ${MQ(Breakpoints.md)} {
    font-size: 26px;
    line-height: 36px;
  }
`;

const Text = styled.p`
  text-transform: none;
`;

const SlideLink = styled(Link)`
  font-weight: 500;
  position: relative;

  margin-top: 7px;

  &::after {
    content: "";
    display: inline-block;
    background-color: black;
    width: 50px;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
`;

const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const SecondaryTitle = ({
  description,
  title,
  accentTitle,
  link,
  linkText,
  text,
}) => {
  return (
    <TitleContainer>
      <Description>{description}</Description>
      <TitleWrapper>
        <AccentTitle>{accentTitle}&nbsp;</AccentTitle>
        <Title>{title}</Title>
      </TitleWrapper>
      <Text>{text}</Text>
      <SlideLink to={link}>{linkText}</SlideLink>
    </TitleContainer>
  );
};
