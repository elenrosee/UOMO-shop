import { useState } from "react";
import { Products } from "./Products";
import { SectionsList } from "./SectionsList";
import {
  AccentTitle,
  Title,
  TitleWrapper,
  TrendyProductsContainer,
} from "./TrendyProducts.styled";

export const TrendyProducts = () => {
  const [selectedSection, setSelectedSection] = useState("all");
  // const [items, setItems] = useState([])

  // useEffect(() => {
  // const loadData = async () => {
  //   const images = await getImages()
  //   setItems(images)
  // }
  // loadData()

  //     const loadData = () => {
  //       setItems([{ some: 0 }, { some: 1 }])
  //     }
  //     loadData()
  //   }, [])

  const onClick = (e) => {
    setSelectedSection(e.currentTarget.name);
  };

  return (
    <TrendyProductsContainer>
      <TitleWrapper>
        <Title>OUR TRENDY&nbsp;</Title>
        <AccentTitle>PRODUCTS</AccentTitle>
      </TitleWrapper>
      <SectionsList onClick={onClick} selectedSection={selectedSection} />
      <Products />
    </TrendyProductsContainer>
  );
};
