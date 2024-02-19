import styled from "styled-components";

import { Breakpoints, MQ } from "../../../common";
export const ShopColectionsContainer = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${MQ(Breakpoints.lg)} {
    margin-top: 75px;
    margin-bottom: 75px;
    flex-wrap: nowrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
