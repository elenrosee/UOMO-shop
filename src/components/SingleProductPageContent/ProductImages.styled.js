import { Breakpoints, MQ } from "common";
import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${MQ(Breakpoints.md)} {
    display: flex;
    flex-direction: row;
  }
`;

export const AllImages = styled.div`
  display: flex;
  min-width: 90px;
  margin-right: 10px;

  ${MQ(Breakpoints.md)} {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  display: block;
  height: 90px;
  width: 90px;

  object-fit: cover;

  &.focused {
    border: 2px solid black;
  }

  :not(:last-child) {
    margin-right: 8px;
  }

  ${MQ(Breakpoints.md)} {
    :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
`;

export const MainImage = styled.img`
  display: block;
  height: 450px;
  width: 100vw;

  object-fit: cover;

  margin-bottom: 12px;

  ${MQ(Breakpoints.md)} {
    height: 650px;
    width: 670px;
    margin-bottom: 0;
  }

  ${MQ(Breakpoints.lg)} {
    height: 700px;
    width: 712px;
    margin-bottom: 0;
  }
`;
