import { Breakpoints } from "common";
import { HeartSvg } from "icons";
import { useMediaQuery } from "react-responsive";
import {
  PriceWrapper,
  ProductCategory,
  ProductImg,
  ProductItem,
  ProductName,
  ProductPrice,
  Wrapper,
} from "./SingleProductItem.styled";

export const SingleProductItem = ({ item }) => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  const { id, mobImg, img, alt, category, name, onSale, price, discount } =
    item;

  return (
    <ProductItem key={id}>
      {isMobile && <ProductImg src={mobImg} alt={alt} />}
      {isDesctop && <ProductImg src={img} alt={alt} />}
      <Wrapper>
        <ProductCategory>{category}</ProductCategory>
        <HeartSvg fill={"var(--secondary-text-color)"} />
      </Wrapper>
      <ProductName to="/single_product">{name}</ProductName>
      {!onSale ? (
        <ProductPrice>${price}</ProductPrice>
      ) : (
        <PriceWrapper>
          <ProductPrice crossedOut={true} color={"var(--secondary-text-color)"}>
            ${price}
          </ProductPrice>
          <ProductPrice color={"red"}>${price - discount}</ProductPrice>
        </PriceWrapper>
      )}
    </ProductItem>
  );
};
