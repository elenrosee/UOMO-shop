import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWraper = styled.div``;

export const PageNavLinkMenu = styled.div``;

export const PageNavLink = styled(NavLink)`
  font-weight: 500;

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
      bottom: -10px;
    }
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const UserMenu = styled.ul`
  li {
    display: inline-block;

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
