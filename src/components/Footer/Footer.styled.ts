import { Breakpoints, Container, MQ } from "../../common";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--background-footer-color);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Wrapper = styled(Container)`
  display: flex;

  justify-content: space-between;

  flex-wrap: wrap;
  border-bottom: solid 1px gray;

  ${MQ(Breakpoints.md)} {
    justify-content: space-between;
  }
`;
