import {
  AccentTitle,
  Title,
  TitleWrapper,
} from "components/HomePageContent/LimitedEdition/LimitedEdition.styled";
import { ProductsList } from "components/ShopPageContent/ProductsList";
import { productsData } from "data/productsData";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div``;

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
    <Wrapper>
      <TitleWrapper>
        <Title>related&nbsp;</Title>
        <AccentTitle>products</AccentTitle>
      </TitleWrapper>
      <ProductsList products={relatedProducts} />
    </Wrapper>
  );
};
