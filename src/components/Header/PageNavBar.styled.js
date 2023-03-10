import { Breakpoints, MQ } from "common";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 20px;

  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: white;

  ${MQ(Breakpoints.md)} {
    width: auto;
    position: relative;
    padding: 0px;
    flex-direction: row;
  }
`;

export const PageNavLink = styled(NavLink)`
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 20px;
  }

  ${MQ(Breakpoints.md)} {
    :not(:last-child) {
      margin-bottom: 0px;
      margin-right: 30px;
    }
  }

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
