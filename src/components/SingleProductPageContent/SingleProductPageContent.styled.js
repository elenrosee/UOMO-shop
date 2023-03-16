import { Breakpoints, MQ } from "common";
import { ProductPrice } from "common/SinglProductItem/SingleProductItem.styled";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${MQ(Breakpoints.md)} {
    padding-top: 10px;
    padding-bottom: 50px;
  }
`;

export const ProductInfo = styled.div`
  max-width: 500px;
  min-width: 320px;

  padding-top: 30px;
  padding-bottom: 50px;

  ${MQ(Breakpoints.lg)} {
    padding-top: 0;
    padding-left: 50px;
  }
`;

export const ProductName = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  margin-bottom: 10px;

  ${MQ(Breakpoints.md)} {
    font-size: 26px;
    line-height: 35px;
  }
`;

export const Price = styled(ProductPrice)`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;

  margin-bottom: 25px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 30px;
`;

export const OrderWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const OrderBtn = styled.button`
  display: block;
  width: 280px;
  height: inherit;
  text-transform: uppercase;
  color: white;
  background-color: black;

  border: none;

  margin-left: 20px;
`;

export const AddToWishListBtn = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;

  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: black;

  & span {
    margin-left: 10px;
  }

  position: relative;

  &::after {
    content: "";
    display: inline-block;
    background-color: black;
    width: 70%;
    height: 1.5px;
    position: absolute;
    left: 0;
    bottom: -3px;
  }
`;
