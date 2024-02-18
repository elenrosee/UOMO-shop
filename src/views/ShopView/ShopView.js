import { useParams } from "react-router-dom";
import { ShopPageContent } from "../../components";

export const ShopView = () => {
  const params = useParams();
  const productCategory = params.category;

  return (
    <>
      <ShopPageContent productCategory={productCategory} />
    </>
  );
};
