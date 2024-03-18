import { ProductsList } from "../../common";
import {
  AccentTitle,
  Title,
  TitleWrapper,
} from "../HomePageContent/LimitedEdition/LimitedEdition.styled";

import { ProductType, productsData } from "../../data/productsData";
import { FC, useEffect, useState } from "react";

type RelatedProductsType = {
  category: string;
  id: string;
};

export const RelatedProducts: FC<RelatedProductsType> = ({ category, id }) => {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const loadProductData = () => {
      const relatedProducts = productsData.filter(
        (item) => item.id !== id && item.category === category,
      );

      setRelatedProducts(relatedProducts);
    };

    loadProductData();
  }, [category, id]);

  return (
    <>
      <TitleWrapper>
        <Title>related&nbsp;</Title>
        <AccentTitle>products</AccentTitle>
      </TitleWrapper>
      <ProductsList products={relatedProducts} />
    </>
  );
};
