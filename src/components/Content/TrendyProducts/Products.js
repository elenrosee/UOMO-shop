import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductsList = styled.ul``;

export const ProductItem = styled.li``;

export const ProductImg = styled.img``;

export const ProductName = styled(NavLink)``;

export const ProductPrice = styled.p``;

export const ProductCategory = styled.p``;

export const Products = () => {
  return (
    <ProductsList>
      <ProductItem>
        <ProductImg />
        <ProductCategory>Dresses</ProductCategory>
        <ProductName>Cropped Faux Leather Jacket</ProductName>
        <ProductPrice>$29</ProductPrice>
      </ProductItem>
    </ProductsList>
  );
};
