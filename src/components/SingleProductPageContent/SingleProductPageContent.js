import { useState } from "react";

import { PriceWrapper } from "common/SinglProductItem/SingleProductItem.styled";
import { HeartSvg } from "icons";
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
import { RelatedProducts } from "./RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "redux/user/userSelectors";
import {
  addToShopingCart,
  addToWishList,
  removeFromWishList,
} from "redux/user/userActions";

export const SingleProductPageContent = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const dispatch = useDispatch();
  const wishlist = useSelector(getUserWishlist);

  const isInWishlist = wishlist.includes(product.id);

  const addProductToWishList = (id) => {
    dispatch(addToWishList(id));
  };

  const removeProductFromWishList = (id) => {
    dispatch(removeFromWishList(id));
  };

  const addToCart = () => {
    if (!selectedSize) {
      return;
    }

    if (!selectedColor) {
      return;
    }

    dispatch(
      addToShopingCart({
        id: product.id,
        size: selectedSize,
        color: selectedColor,
        quantity: selectedQuantity,
      })
    );
  };

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
    id,
    img,
    mobImg,
    alt,
    category,
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
    <>
      <Wrapper>
        <ProductImages img={img} mobImg={mobImg} alt={alt} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
          {!onSale ? (
            <Price>${price}</Price>
          ) : (
            <PriceWrapper>
              <Price crossedOut={true} color={"var(--secondary-text-color)"}>
                ${price}
              </Price>
              <Price color="var(--accent-red-color)">${price - discount}</Price>
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
            <OrderBtn onClick={addToCart}>ADD TO CART</OrderBtn>
          </OrderWrapper>
          <AddToWishListBtn
            onClick={() =>
              isInWishlist
                ? removeProductFromWishList(id)
                : addProductToWishList(id)
            }
          >
            <HeartSvg
              width="16"
              height="16"
              accentHeart={isInWishlist ? true : false}
            />
            <span>ADD TO WISHLIST</span>
          </AddToWishListBtn>
        </ProductInfo>
      </Wrapper>
      <RelatedProducts category={category} id={id} />
    </>
  );
};
