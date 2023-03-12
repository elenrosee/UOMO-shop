import { Breakpoints, MQ } from "common";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 26px;
  line-height: 35px;
  text-transform: uppercase;

  margin-bottom: 20px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 40px;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 384px;
  height: 384px;
  margin: -10px;

  ${MQ(Breakpoints.md)} {
    width: 1420px;
    height: 466px;
    margin: -3px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 118px;
  width: 118px;

  margin: 5px;

  object-fit: cover;

  ${MQ(Breakpoints.md)} {
    height: 230px;
    width: 230px;

    margin: 3px;
  }
`;
