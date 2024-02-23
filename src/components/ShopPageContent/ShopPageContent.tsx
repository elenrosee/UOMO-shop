import { useEffect, useState, FC } from "react";
import { HeroSection } from "./HeroSection";
import { Product, productsData } from "../../data/productsData";
import {
  ProductsCategoryType,
  productsCategories,
} from "../../data/productsCategories";
import { ProductsList } from "../../common";

type ShopPageContentProps = { productCategory: string };

export const ShopPageContent: FC<ShopPageContentProps> = ({
  productCategory,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedProductsCategory] = useState<
    ProductsCategoryType | undefined
  >(undefined);
  const [productsBySelectedCategory, setProductsBySelectedCategory] = useState<
    Product[]
  >([]);

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
