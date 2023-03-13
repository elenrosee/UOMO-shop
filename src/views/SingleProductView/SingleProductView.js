import { Container } from "common";
import { SingleProductPageContent } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "data/productsData";
import styled from "styled-components";

export const Wrapper = styled(Container)``;

export default function SingleProductView() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductData = () => {
      const singleProductData = productsData.find(
        (item) => item.id === productId
      );

      setProduct(singleProductData);
    };

    loadProductData();
  }, [productId]);

  return (
    <Wrapper>
      {product && <SingleProductPageContent product={product} />}
    </Wrapper>
  );
}
