import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PageNavLink = styled(NavLink)`
  font-weight: 500;
  margin-left: 30px;

  &.active {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 26px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }
`;
