import styled from "styled-components";
import { Breakpoints, MQ } from "../../../common";

export const BlockContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
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
