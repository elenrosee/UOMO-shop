import { FC, MouseEvent } from "react";
import {
  ProductSectionsList,
  SectionButton,
  SectionName,
} from "./SectionsList.styled";

type SelectionsListProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  selectedSection: string;
  sectionsName: string[];
};

export const SectionsList: FC<SelectionsListProps> = ({
  onClick,
  selectedSection,
  sectionsName,
}) => {
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
