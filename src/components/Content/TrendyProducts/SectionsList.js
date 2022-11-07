import {
  ProductSectionsList,
  SectionButton,
  SectionName,
} from "./TrendyProducts.styled";

export const SectionsList = ({ onClick, selectedSection }) => {
  return (
    <ProductSectionsList>
      <SectionName>
        <SectionButton
          onClick={onClick}
          name="all"
          className={selectedSection === "all" ? "accent" : ""}
        >
          All
        </SectionButton>
      </SectionName>
      <SectionName>
        <SectionButton
          onClick={onClick}
          name="newarrivals"
          className={selectedSection === "newarrivals" ? "accent" : ""}
        >
          NEWARRIVALS
        </SectionButton>
      </SectionName>
      <SectionName>
        <SectionButton
          onClick={onClick}
          name="best seller"
          className={selectedSection === "best seller" ? "accent" : ""}
        >
          BEST SELLER
        </SectionButton>
      </SectionName>
      <SectionName>
        <SectionButton
          onClick={onClick}
          name="top rating"
          className={selectedSection === "top rating" ? "accent" : ""}
        >
          TOP RATING
        </SectionButton>
      </SectionName>
    </ProductSectionsList>
  );
};
