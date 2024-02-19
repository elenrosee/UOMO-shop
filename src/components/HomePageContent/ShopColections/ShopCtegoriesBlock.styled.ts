import styled from "styled-components";
import { Breakpoints, MQ } from "../../../common";

type BlockContainerProps = {
  width: string;
  height: string;
  color: string;
};

export const BlockContainer = styled.div<BlockContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: end;
  align-items: flex-end;

  position: relative;

  margin-bottom: 15px;

  ${MQ(Breakpoints.md)} {
    margin: 15px;
  }
`;

export const ColectionImage = styled.img`
  display: block;
  height: 100%;
  width: ${({ width }) => width};

  object-fit: cover;
`;
