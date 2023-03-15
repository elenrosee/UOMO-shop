import { Breakpoints, MQ } from "common";
import styled from "styled-components";

export const LimitedEditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin-bottom: 50px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 80px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 15px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
  line-height: 37px;

  ${MQ(Breakpoints.lg)} {
    font-size: 35px;
    line-height: 47px;
  }
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  width: 320px;

  ${MQ(Breakpoints.md)} {
    width: 675px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 1410px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const ProductsBlock = styled.div`
  display: flex;
  width: 100%;
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

  &.backBtn {
    position: absolute;
    left: 5px;
    top: 50%;

    z-index: 1;

    ${MQ(Breakpoints.md)} {
      left: 10%;
    }

    ${MQ(Breakpoints.lg)} {
      left: 5px;
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

    ${MQ(Breakpoints.md)} {
      right: 5px;
    }
  }
`;
