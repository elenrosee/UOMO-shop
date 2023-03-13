import {
  ColorsWrapper,
  Text,
  ColorList,
  ColorItem,
  ColorBtn,
} from "./ProductColorsList.styled";

export const ProductColorsList = ({
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
            className={selectedColor === color && "active"}
            key={index}
          >
            <ColorBtn color={color} onClick={() => setSelectedColor(color)} />
          </ColorItem>
        ))}
      </ColorList>
    </ColorsWrapper>
  );
};
