import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductsList = styled.ul``;

export const ProductItem = styled.li``;

export const ProductImg = styled.img``;

export const ProductName = styled(NavLink)``;

export const ProductPrice = styled.p``;

export const ProductCategory = styled.p``;

export const Products = ({ items }) => {
  return (
    <ProductsList>
      {items.map(({ url, alt, category, name, link, price }, index) => (
        <ProductItem key={index}>
          <ProductImg src={url} alt={alt} />
          <ProductCategory>{category}</ProductCategory>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price}</ProductPrice>
        </ProductItem>
      ))}
    </ProductsList>
  );
};
