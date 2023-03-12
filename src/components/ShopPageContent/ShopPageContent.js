import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProductsList } from "./ProductsList";
import { productsData } from "data/productsData";
import { productsCategories } from "data/productsCategories";

export const ShopPageContent = ({
  productCategory = productsCategories[0].name,
}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedProductsCategory] = useState({});
  const [productsBySelectedCategory, setProductsBySelectedCategory] = useState(
    []
  );

  useEffect(() => {
    const setSelectedCategory = () => {
      const category = productsCategories.find(
        (i) => i.name === productCategory
      );

      setSelectedProductsCategory(category);
    };
    const loadProducts = () => {
      setProducts(productsData);
    };

    loadProducts();
    setSelectedCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const setProductsByCategory = () => {
      const filtredProducts = products.filter(
        (pr) => pr.category === selectedCategory.name
      );

      setProductsBySelectedCategory(filtredProducts);
    };

    setProductsByCategory();
  }, [products, selectedCategory]);

  return (
    <>
      <HeroSection
        selectedCategory={selectedCategory}
        productsCategories={productsCategories}
        setSelectedProductsCategory={setSelectedProductsCategory}
      />
      <ProductsList products={productsBySelectedCategory} />
    </>
  );
};
