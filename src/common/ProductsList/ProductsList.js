import { SingleProductItem } from "common";
import { List, ProductsListContainer } from "./ProductsList.styled";

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
