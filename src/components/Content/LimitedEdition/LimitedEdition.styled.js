import { Breakpoints, MQ } from "common";
import styled from "styled-components";

export const LimitedEditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  margin-bottom: 50px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 80px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 15px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 26px;
  line-height: 37px;

  ${MQ(Breakpoints.md)} {
    font-size: 35px;
    line-height: 47px;
  }
`;

export const AccentTitle = styled(Title)`
  font-weight: 700;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;

  width: 384px;

  ${MQ(Breakpoints.md)} {
    width: 1050px;
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
  margin: -7px;

  ${MQ(Breakpoints.md)} {
    margin: -15px;
  }
`;
