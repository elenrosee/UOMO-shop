import { Breakpoints } from "common";
import { useMediaQuery } from "react-responsive";
import {
  CategoriesList,
  CategoryName,
  HeroContainer,
  HeroImg,
  HeroTextContent,
  SelectedCategory,
} from "./HeroSection.styled";

export const HeroSection = ({
  selectedCategory,
  productsCategories,
  setSelectedProductsCategory,
}) => {
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  const { name, img } = selectedCategory;

  return (
    <HeroContainer>
      {isDesctop && <HeroImg src={img} alt={name} />}
      <HeroTextContent>
        <SelectedCategory>{name}</SelectedCategory>
        <CategoriesList>
          {productsCategories.map((item, index) => {
            return (
              <CategoryName
                key={index}
                onClick={() => setSelectedProductsCategory(item)}
                className={item.name === selectedCategory.name && "active"}
              >
                {item.name}
              </CategoryName>
            );
          })}
        </CategoriesList>
      </HeroTextContent>
    </HeroContainer>
  );
};
