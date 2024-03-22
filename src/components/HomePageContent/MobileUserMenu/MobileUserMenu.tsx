import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "../../../icons";
import { useSelector } from "react-redux";
import {
  getPurchasesQuantity,
  getUserWishlist,
} from "../../../redux/userSelectors";
import {
  BtnText,
  Item,
  MenuBtn,
  MenuLink,
  Wrapper,
} from "./MobileUserMenu.styled";
import { UserMenuNavLink } from "../../Header/Header.styled";

export const MobileUserMenu = () => {
  const wishListLangth: number = useSelector(getUserWishlist).length;
  const purchasesQuantity: number = useSelector(getPurchasesQuantity);

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
          <HeartSvg counter={wishListLangth} />
          <BtnText>Whishlist</BtnText>
        </MenuBtn>
      </Item>
      <Item>
        <UserMenuNavLink to="/cart">
          <ShoppingBagSvg counter={purchasesQuantity} />
          <BtnText>Cart</BtnText>
        </UserMenuNavLink>
      </Item>
    </Wrapper>
  );
};
