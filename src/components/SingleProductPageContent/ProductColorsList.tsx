import { FC } from "react";
import {
  ColorsWrapper,
  Text,
  ColorList,
  ColorItem,
  ColorBtn,
} from "./ProductColorsList.styled";

type ProductColorsListProps = {
  color: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

export const ProductColorsList: FC<ProductColorsListProps> = ({
  color,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <ColorsWrapper>
      <Text>color</Text>
      <ColorList>
        {color.map((color, index) => (
          <ColorItem
            className={`${selectedColor === color && "active"}`}
            key={index}
          >
            <ColorBtn color={color} onClick={() => setSelectedColor(color)} />
          </ColorItem>
        ))}
      </ColorList>
    </ColorsWrapper>
  );
};
