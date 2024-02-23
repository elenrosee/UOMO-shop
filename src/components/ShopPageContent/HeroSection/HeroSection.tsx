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
import { FC } from "react";

type SelectedCategoryType = {
  img: string;
  linkTo: string;
  name: string;
};

type HeroSectionProps = {
  selectedCategory: SelectedCategoryType;
  productsCategories: SelectedCategoryType[];
};

export const HeroSection: FC<HeroSectionProps> = ({
  selectedCategory,
  productsCategories,
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
              <CategoryNameLink
                key={index}
                to={`/shop/${item.linkTo}`}
                className={item.name === selectedCategory.name ? "active" : ""}
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
