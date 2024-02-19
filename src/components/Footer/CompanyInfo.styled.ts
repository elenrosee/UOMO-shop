import styled from "styled-components";
import { Breakpoints, MQ } from "../../common";

export const Wrapper = styled.div`
  width: 240px;
  margin-bottom: 50px;
  margin-right: 15px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0px;
  }
`;

export const Address = styled.p`
  font-weight: 500;

  margin-top: 25px;
`;

export const Contacts = styled.p`
  font-weight: 500;

  margin-top: 25px;
  margin-bottom: 25px;
`;
