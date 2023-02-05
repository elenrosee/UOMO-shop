import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Breakpoints, Container, MQ } from "common";

export const HeaderWraper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  ${MQ(Breakpoints.md)} {
    justify-content: space-around;

    height: 36px;
    padding: 30px 0 20px;
  }
`;

export const PageNavLinkMenu = styled.div`
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

  &.shopping-bag {
    position: relative;

    &::before {
      content: ${({ shoppingCounter }) =>
        shoppingCounter ? `"${shoppingCounter}"` : `"0"`};

      display: inline-block;
      font-size: small;
      color: white;
      background-color: #b9a16b;

      padding: 1px;
      min-width: 16px;
      height: 16px;
      border-radius: 20px;

      position: absolute;
      left: 8px;
      bottom: -3px;
    }
  }
`;
