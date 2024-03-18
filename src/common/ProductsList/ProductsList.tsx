import { FC } from "react";
import { ProductType } from "../../data/productsData";
import { SingleProductItem } from "../SinglProductItem";
import { List, ProductsListContainer } from "./ProductsList.styled";

type ProductsListProps = {
  products: ProductType[];
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
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
