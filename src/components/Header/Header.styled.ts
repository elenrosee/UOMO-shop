import styled from "styled-components";
import { Breakpoints, Container, MQ } from "../../common";
import { NavLink } from "react-router-dom";

export const HeaderWraper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  position: relative;
  padding: 15px;

  ${MQ(Breakpoints.md)} {
    height: 36px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const UserMenu = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const UserMenuBtn = styled.button`
  background: inherit;
  border: none;
`;

export const UserMenuNavLink = styled(NavLink)`
  background: inherit;
  border: none;
`;
