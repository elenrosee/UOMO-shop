import { InputBtn, Quantity, QuantityInput } from "./Input.styled";

export const Input = ({ selectedQuantity, changeQuantity }) => {
  return (
    <QuantityInput>
      <InputBtn onClick={changeQuantity} name="less">
        -
      </InputBtn>
      <Quantity>{selectedQuantity}</Quantity>
      <InputBtn onClick={changeQuantity} name="more">
        +
      </InputBtn>
    </QuantityInput>
  );
};
