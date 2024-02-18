import { Breakpoints } from "../../../common";
import { useMediaQuery } from "react-responsive";
import {
  CategoriesList,
  CategoryNameLink,
  HeroContainer,
  HeroImg,
  HeroTextContent,
  SelectedCategory,
} from "./HeroSection.styled";

export const HeroSection = ({ selectedCategory, productsCategories }) => {
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
              <CategoryNameLink
                key={index}
                to={`/shop/${item.linkTo}`}
                className={item.name === selectedCategory.name && "active"}
              >
                {item.name}
              </CategoryNameLink>
            );
          })}
        </CategoriesList>
      </HeroTextContent>
    </HeroContainer>
  );
};
