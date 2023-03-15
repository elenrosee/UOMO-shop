import { Breakpoints, MQ } from "common/Breakpoints";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductItem = styled.div`
  margin: 7px;
  width: 185px;
  height: 292px;

  ${MQ(Breakpoints.md)} {
    margin: 15px;
    width: 330px;
    height: 495px;
  }
`;

export const ProductImg = styled.img`
  display: block;
  height: 210px;
  width: 100%;

  object-fit: cover;

  ${MQ(Breakpoints.md)} {
    height: 400px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 14px;
`;

export const ProductCategory = styled.p`
  text-transform: capitalize;
  color: var(--secondary-text-color);
`;

export const AddToWishListBtn = styled.button`
  background-color: transparent;
  border: none;
`;

export const ProductNameLink = styled(Link)`
  display: block;

  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:focus,
  :hover {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      background-color: black;
      width: 60%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 1px;
    }
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const ProductPrice = styled.p`
  text-decoration: ${({ crossedOut }) =>
    crossedOut ? "line-through 2px" : "none"};
  color: ${({ color }) => (!color ? "#222" : color)};
  font-size: 16px;

  &:first-child {
    margin-right: 10px;
  }
`;
