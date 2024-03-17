import React from "react";
import { InputBtn, Quantity, QuantityInput } from "./Input.styled";

type InputProps = {
  selectedQuantity: number;
  changeQuantity: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

export const Input: React.FC<InputProps> = ({
  selectedQuantity,
  changeQuantity,
}) => {
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
