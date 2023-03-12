import { Breakpoints, MQ } from "common";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Timer } from "./Timer";

export const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  background-color: #f2f3f7;
  padding: 75px 0px 25px 30px;

  ${MQ(Breakpoints.md)} {
    padding: 210px 0px 40px 200px;
    margin-bottom: 100px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  margin-bottom: 25px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 120px;
  }
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
  font-size: 30px;
  line-height: 40px;

  ${MQ(Breakpoints.md)} {
    font-size: 70px;
    line-height: 80px;
  }
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

export const TimerComponent = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Description>DEAL OF THE WEEK</Description>
        <AccentTitle>Spring</AccentTitle>
        <Title>Collection</Title>
        <SlideLink to={""}>SHOP NOW</SlideLink>
      </TitleContainer>

      <Timer targetDate={new Date("May 1, 2023")} />
    </Wrapper>
  );
};
