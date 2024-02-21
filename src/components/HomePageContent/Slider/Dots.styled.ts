import { Breakpoints, MQ } from "../../../common";
import styled from "styled-components";

export const DotsContainer = styled.div`
  position: absolute;

  margin: -15px;
  left: 30px;
  bottom: 45px;

  ${MQ(Breakpoints.md)} {
    left: 195px;
    bottom: 60px;
  }
`;

export const Dot = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border: none;

  & span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 30%);
  }

  &.selected {
    border: 2px solid black;
    border-radius: 100px;

    & span {
      background-color: rgba(0, 0, 0, 100%);
    }
  }
`;
