import {
  ProductSectionsList,
  SectionButton,
  SectionName,
} from "./TrendyProducts.styled";

export const SectionsList = ({ onClick, selectedSection, sectionsName }) => {
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
