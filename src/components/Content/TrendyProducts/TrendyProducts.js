import { useEffect, useState } from "react";
import { Products } from "./Products";
import { SectionsList } from "./SectionsList";
import {
  AccentTitle,
  LinkWraper,
  SeeAllProductsLink,
  Title,
  TitleWrapper,
  TrendyProductsContainer,
} from "./TrendyProducts.styled";

import { productsData } from "data/productsData";
import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "common";
const sectionsName = ["all", "newarrivals", "best seller", "top rating"];

export const TrendyProducts = () => {
  const [selectedSection, setSelectedSection] = useState("all");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = () => {
      switch (selectedSection) {
        case "all":
          setItems(productsData);
          break;
        case "newarrivals":
          setItems(productsData);
          break;
        default:
          setItems(productsData);
      }
    };
    loadData();
  }, [selectedSection]);

  const onClick = (e) => {
    setSelectedSection(e.currentTarget.name);
  };

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const displayQuantity = isMobile ? 4 : 8;

  return (
    <TrendyProductsContainer>
      <TitleWrapper>
        <Title>OUR TRENDY&nbsp;</Title>
        <AccentTitle>PRODUCTS</AccentTitle>
      </TitleWrapper>
      <SectionsList
        onClick={onClick}
        selectedSection={selectedSection}
        sectionsName={sectionsName}
      />
      <Products items={items} displayQuantity={displayQuantity} />
      <LinkWraper>
        <SeeAllProductsLink to="/colection">SEE ALL PRODUCT</SeeAllProductsLink>
      </LinkWraper>
    </TrendyProductsContainer>
  );
};
