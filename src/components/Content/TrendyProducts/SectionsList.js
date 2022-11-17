import {
  ProductSectionsList,
  SectionButton,
  SectionName,
} from "./TrendyProducts.styled";

const sectionsName = ["all", "newarrivals", "best seller", "top rating"];

export const SectionsList = ({ onClick, selectedSection }) => {
  return (
    <ProductSectionsList>
      {sectionsName.map((item) => {
        return (
          <SectionName key={item}>
            <SectionButton
              onClick={onClick}
              name={item}
              className={selectedSection === item ? "accent" : ""}
            >
              {item}
            </SectionButton>
          </SectionName>
        );
      })}
    </ProductSectionsList>
  );
};
