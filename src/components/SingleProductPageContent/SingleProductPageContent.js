import { PriceWrapper } from "common/SinglProductItem/SingleProductItem.styled";
import { HeartSvg } from "icons";
import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { ProductColorsList } from "./ProductColorsList";
import { ProductImages } from "./ProductImages";
import { ProductSizeList } from "./ProductSizeList";
import {
  ProductDesc,
  ProductInfo,
  ProductName,
  Price,
  Wrapper,
  OrderWrapper,
  OrderBtn,
  AddToWishListBtn,
} from "./SingleProductPageContent.styled";

export const SingleProductPageContent = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const changeQuantity = (e) => {
    if (e.currentTarget.name === "less" && selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    } else if (
      e.currentTarget.name === "more" &&
      stockBalance > selectedQuantity
    ) {
      setSelectedQuantity(selectedQuantity + 1);
    } else {
      return;
    }
  };

  const {
    img,
    // mobImg,
    alt,
    //  category,
    name,
    description,
    sizes,
    color,
    price,
    onSale,
    discount,
    stockBalance,
  } = product;

  return (
    <Wrapper>
      <ProductImages img={img} alt={alt} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        {!onSale ? (
          <Price>${price}</Price>
        ) : (
          <PriceWrapper>
            <Price crossedOut={true} color={"var(--secondary-text-color)"}>
              ${price}
            </Price>
            <Price color="red">${price - discount}</Price>
          </PriceWrapper>
        )}
        <ProductDesc>{description}</ProductDesc>
        <ProductSizeList
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ProductColorsList
          color={color}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <OrderWrapper>
          <Input
            selectedQuantity={selectedQuantity}
            changeQuantity={changeQuantity}
          />
          <OrderBtn>ADD TO CART</OrderBtn>
        </OrderWrapper>
        <AddToWishListBtn>
          <HeartSvg width="16" height="16" />
          <span>ADD TO WISHLIST</span>
        </AddToWishListBtn>
      </ProductInfo>
    </Wrapper>
  );
};
