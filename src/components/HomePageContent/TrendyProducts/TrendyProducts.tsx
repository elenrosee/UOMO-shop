import { useEffect, useState, MouseEvent } from "react";
import { SectionsList } from "./SectionsList";
import {
  AccentTitle,
  LinkWraper,
  ProductsList,
  SeeAllProductsLink,
  Title,
  TitleWrapper,
  TrendyProductsContainer,
} from "./TrendyProducts.styled";

import { productsData, Product } from "../../../data/productsData";
import { useMediaQuery } from "react-responsive";
import { Breakpoints, SingleProductItem } from "../../../common";

const sectionsName = ["all", "newarrivals", "best seller", "top rating"];

export const TrendyProducts = () => {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [items, setItems] = useState<Product[]>([]);

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

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
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
      <ProductsList>
        {items.map(
          (item, index) =>
            index < displayQuantity && (
              <SingleProductItem item={item} key={item.id} />
            ),
        )}
      </ProductsList>
      <LinkWraper>
        <SeeAllProductsLink to={`/shop/shop-all`}>
          SEE ALL PRODUCT
        </SeeAllProductsLink>
      </LinkWraper>
    </TrendyProductsContainer>
  );
};
