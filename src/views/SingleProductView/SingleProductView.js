import { SingleProductPageContent } from "../../components/SingleProductPageContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { Container } from "../../common";

export const SingleProductView = () => {
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
    <Container>
      {product && <SingleProductPageContent product={product} />}
    </Container>
  );
};
