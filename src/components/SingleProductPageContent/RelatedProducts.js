import { ProductsList } from "../../common";
import {
  AccentTitle,
  Title,
  TitleWrapper,
} from "../HomePageContent/LimitedEdition/LimitedEdition.styled";

import { productsData } from "../../data/productsData";
import { useEffect, useState } from "react";

export const RelatedProducts = ({ category, id }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const loadProductData = () => {
      const relatedProducts = productsData.filter(
        (item) => item.id !== id && item.category === category
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
