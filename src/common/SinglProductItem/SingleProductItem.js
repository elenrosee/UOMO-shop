import { Breakpoints } from "../../common";
import { HeartSvg } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/user/userActions";
import { getUserWishlist } from "../../redux/user/userSelectors";
import {
  AddToWishListBtn,
  PriceWrapper,
  ProductCategory,
  ProductImg,
  ProductItem,
  ProductNameLink,
  ProductPrice,
  Wrapper,
} from "./SingleProductItem.styled";

export const SingleProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getUserWishlist);

  const isInWishlist = wishlist.includes(item.id);

  const addProductToWishList = (id) => {
    dispatch(addToWishList(id));
  };

  const removeProductFromWishList = (id) => {
    dispatch(removeFromWishList(id));
  };

  const { id, mobImg, img, alt, category, name, onSale, price, discount } =
    item;

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <ProductItem key={id}>
      {isMobile && <ProductImg src={mobImg[0]} alt={alt} />}
      {isDesctop && <ProductImg src={img[0]} alt={alt} />}
      <Wrapper>
        <ProductCategory>{category}</ProductCategory>
        <AddToWishListBtn
          onClick={() =>
            isInWishlist
              ? removeProductFromWishList(id)
              : addProductToWishList(id)
          }
        >
          <HeartSvg
            fill={"var(--secondary-text-color)"}
            accentHeart={isInWishlist ? true : false}
          />
        </AddToWishListBtn>
      </Wrapper>
      <ProductNameLink to={`/single_product/${id}`}>{name}</ProductNameLink>
      {!onSale ? (
        <ProductPrice>${price}</ProductPrice>
      ) : (
        <PriceWrapper>
          <ProductPrice crossedOut={true} color={"var(--secondary-text-color)"}>
            ${price}
          </ProductPrice>
          <ProductPrice color={"var(--accent-red-color)"}>
            ${price - discount}
          </ProductPrice>
        </PriceWrapper>
      )}
    </ProductItem>
  );
};
