import styled from "styled-components";
import { Breakpoints } from "../Breakpoints";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  min-width: ${Breakpoints.sm}px;
  max-width: ${Breakpoints.lg}px;
`;
