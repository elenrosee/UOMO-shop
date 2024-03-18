import { FC } from "react";

import {
  SizesWrapper,
  Text,
  SizesItem,
  SizesList,
} from "./ProductSizeList.styled";

type ProductSizeListProps = {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
};

export const ProductSizeList: FC<ProductSizeListProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <SizesWrapper>
      <Text>sizes</Text>
      <SizesList>
        {sizes.map((size, index) => (
          <SizesItem
            onClick={() => setSelectedSize(size)}
            key={index}
            className={`${selectedSize === size && "active"}`}
          >
            {size}
          </SizesItem>
        ))}
      </SizesList>
    </SizesWrapper>
  );
};
