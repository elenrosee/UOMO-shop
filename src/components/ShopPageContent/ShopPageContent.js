import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProductsList } from "./ProductsList";
import { productsData } from "data/productsData";
import { productsCategories } from "data/productsCategories";

export const ShopPageContent = ({ productCategory }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedProductsCategory] = useState({});
  const [productsBySelectedCategory, setProductsBySelectedCategory] = useState(
    []
  );

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
        (i) => i.linkTo === productCategory
      );

      setSelectedProductsCategory(category);
    };

    const setProductsByCategory = () => {
      const filtredProducts =
        selectedCategory.name === "shop all"
          ? products
          : products.filter((pr) => pr.category === selectedCategory.name);

      setProductsBySelectedCategory(filtredProducts);
    };

    setSelectedCategory();
    setProductsByCategory();
  }, [productCategory, products, selectedCategory]);

  return (
    <>
      <HeroSection
        selectedCategory={selectedCategory}
        productsCategories={productsCategories}
      />
      <ProductsList products={productsBySelectedCategory} />
    </>
  );
};
