import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "../../../icons";
import { useSelector } from "react-redux";
import { getUserWishlist } from "../../../redux/user/userSelectors";
import {
  BtnText,
  Item,
  MenuBtn,
  MenuLink,
  Wrapper,
} from "./MobileUserMenu.styled";

export const MobileUserMenu = () => {
  const wishListLangth: number = useSelector(getUserWishlist).length;

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
        <MenuBtn>
          <ShoppingBagSvg />
          <BtnText>Cart</BtnText>
        </MenuBtn>
      </Item>
    </Wrapper>
  );
};
