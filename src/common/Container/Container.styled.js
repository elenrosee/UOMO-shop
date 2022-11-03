import styled from "styled-components";
import { Breakpoints } from "../Breakpoints";

export const Container = styled.div`
  min-width: ${Breakpoints.sm}px;
  max-width: ${Breakpoints.lg}px;
  margin-left: auto;
  margin-right: auto;
`;
