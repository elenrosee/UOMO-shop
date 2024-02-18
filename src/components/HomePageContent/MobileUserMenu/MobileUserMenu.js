import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "../../../icons";
import { useSelector } from "react-redux";
import {
  getPurchasesQuantity,
  getUserWishlist,
} from "../../../redux/user/userSelectors";
import {
  BtnText,
  Item,
  MenuBtn,
  MenuLink,
  Wrapper,
} from "./MobileUserMenu.styled";

export const MobileUserMenu = () => {
  const wishListLangth = useSelector(getUserWishlist).length;
  const purchasesQuantity = useSelector(getPurchasesQuantity);

  return (
    <Wrapper>
      <Item>
        <MenuLink to="/home">
          <HomeSvg />
          <BtnText>Home</BtnText>
        </MenuLink>
      </Item>
      <Item>
        <MenuLink to="/shop/new-in">
          <ShoulderSvg />
          <BtnText>Shop</BtnText>
        </MenuLink>
      </Item>
      <Item>
        <MenuBtn>
          <HeartSvg shoppingCounter={wishListLangth} />
          <BtnText>Whishlist</BtnText>
        </MenuBtn>
      </Item>
      <Item>
        <MenuBtn>
          <ShoppingBagSvg shoppingCounter={purchasesQuantity} />
          <BtnText>Cart</BtnText>
        </MenuBtn>
      </Item>
    </Wrapper>
  );
};
