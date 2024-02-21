import { Breakpoints, MQ } from "../../../common";
import styled from "styled-components";

type SlideListProps = {
  transform: string;
};

// export const BlockContainer = styled.div<BlockContainerProps>`
//   width: ${({ width }) => width};
//   height: ${({ height }) => height};
//   background-color: ${({ color }) => color};

export const SlideList = styled.div<SlideListProps>`
  display: flex;
  height: 100%;
  transition: 0.5s ease-in-out;
  transform: ${({ transform }) => transform};
  width: 100%;
`;
export const SlideWraper = styled.div`
  flex: 1 0 100%;
  height: 600px;
  position: relative;

  ${MQ(Breakpoints.md)} {
    height: 800px;
  }
`;
export const SlideImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
