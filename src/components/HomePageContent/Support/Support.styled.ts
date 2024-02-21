import styled from "styled-components";
import { Breakpoints, MQ } from "../../../common";

export const SupportContainer = styled.div`
  margin-bottom: 50px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 110px;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 75px;
  }

  ${MQ(Breakpoints.md)} {
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: var(--secondary-text-color);
`;
