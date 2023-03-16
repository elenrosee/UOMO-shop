import { Breakpoints, Container, MQ } from "common";
import styled from "styled-components";

export const InstagramContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 26px;
  line-height: 35px;
  text-transform: uppercase;

  margin-bottom: 20px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 40px;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 384px;
  height: 384px; */
  margin: -5px;

  ${MQ(Breakpoints.md)} {
    /* width: 1420px;
    height: 466px; */
    margin: -3px;
  }
`;

export const Img = styled.img`
  display: block;
  height: 100px;
  width: 100px;

  margin: 5px;

  object-fit: cover;

  ${MQ(Breakpoints.md)} {
    height: 200px;
    width: 200px;

    margin: 3px;
  }
`;
