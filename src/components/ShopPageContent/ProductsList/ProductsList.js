import { Container, SingleProductItem } from "common";
import styled from "styled-components";

export const ProductsListContainer = styled(Container)``;

export const List = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;
  margin-bottom: 25px;
`;

export const ProductsList = ({ products }) => {
  return (
    <ProductsListContainer>
      <List>
        {products.map((item, index) => {
          return <SingleProductItem key={index} item={item} />;
        })}
      </List>
    </ProductsListContainer>
  );
};
