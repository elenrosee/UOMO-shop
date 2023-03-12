import { Breakpoints, Container, MQ } from "common";
import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  ${MQ(Breakpoints.md)} {
    padding: 0;
    position: relative;
    height: 500px;
  }
`;

export const HeroImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
export const HeroTextContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MQ(Breakpoints.md)} {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const SelectedCategory = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 42px;
  text-transform: uppercase;
  color: black;

  ${MQ(Breakpoints.md)} {
    font-weight: 700;
    font-size: 90px;
    line-height: 126px;
    text-transform: uppercase;
    color: white;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryName = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 35px;
  color: black;
  text-transform: uppercase;

  margin-right: 7px;
  margin-left: 7px;

  &.active {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 60%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 7px;
    }
  }

  ${MQ(Breakpoints.md)} {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: white;

    &.active {
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        background-color: white;
        width: 60%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -5px;
      }
    }
  }
`;
