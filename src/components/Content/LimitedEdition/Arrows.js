import { Breakpoints, MQ } from "common";
import { NextSvg, BackSvg } from "icons";
import styled from "styled-components";

export const ArrowsWrapper = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  position: absolute;
  top: 42%;
  width: 420px;
  z-index: 1;

  ${MQ(Breakpoints.md)} {
    top: 46%;
    width: 1080px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 1520px;
  }
`;

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
`;

export const Arrows = ({ changeSlide }) => {
  return (
    <ArrowsWrapper>
      <Arrow onClick={() => changeSlide(-1)}>
        <BackSvg />
      </Arrow>
      <Arrow onClick={() => changeSlide(1)}>
        <NextSvg />
      </Arrow>
    </ArrowsWrapper>
  );
};
