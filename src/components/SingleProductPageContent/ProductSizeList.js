import {
  SizesWrapper,
  Text,
  SizesItem,
  SizesList,
} from "./ProductSizeList.styled";

export const ProductSizeList = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <SizesWrapper>
      <Text>sizes</Text>
      <SizesList>
        {sizes.map((size, index) => (
          <SizesItem
            onClick={() => setSelectedSize(size)}
            key={index}
            className={selectedSize === size && "active"}
          >
            {size}
          </SizesItem>
        ))}
      </SizesList>
    </SizesWrapper>
  );
};
