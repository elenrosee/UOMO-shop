import { ShopPageContent } from "components";
import { useParams } from "react-router-dom";

export default function ShopView() {
  const params = useParams();
  const productCategory = params.category;

  return (
    <>
      <ShopPageContent productCategory={productCategory} />
    </>
  );
}
