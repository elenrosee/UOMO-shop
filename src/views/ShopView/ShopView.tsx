import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType, productsData } from "../../data/productsData";
import {
  ProductsCategoryType,
  productsCategories,
} from "../../data/productsCategories";
import { ProductsList } from "../../common";
import { HeroSection } from "../../components/ShopPageContent";

export const ShopView = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedProductsCategory] = useState<
    ProductsCategoryType | undefined
  >(undefined);
  const [productsBySelectedCategory, setProductsBySelectedCategory] = useState<
    ProductType[]
  >([]);

  const params = useParams();
  const productCategory = params.category;

  useEffect(() => {
    const loadProducts = () => {
      setProducts(productsData);
    };

    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const setSelectedCategory = () => {
      const category = productsCategories.find(
        (i) => i.linkTo === productCategory,
      );

      setSelectedProductsCategory(category);
    };

    const setProductsByCategory = () => {
      const filtredProducts =
        selectedCategory?.name === "shop all"
          ? products
          : products.filter((pr) => pr.category === selectedCategory?.name);

      setProductsBySelectedCategory(filtredProducts);
    };

    setSelectedCategory();
    setProductsByCategory();
  }, [productCategory, products, selectedCategory]);

  return (
    <>
      {selectedCategory && (
        <HeroSection
          selectedCategory={selectedCategory}
          productsCategories={productsCategories}
        />
      )}
      <ProductsList products={productsBySelectedCategory} />
    </>
  );
};

// export const ShopView = () => {
//   const params = useParams()
//   const productCategory = params.category

//   return (
//     <>
//       <ShopPageContent productCategory={productCategory} />
//     </>
//   )
// }
