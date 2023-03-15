import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "icons";
import { useSelector } from "react-redux";
import {
  getPurchasesQuantity,
  getUserWishlist,
} from "redux/user/userSelectors";
import { BtnText, Item, MenuBtn, Wrapper } from "./MobileUserMenu.styled";

export const MobileUserMenu = () => {
  const wishListLangth = useSelector(getUserWishlist).length;
  const purchasesQuantity = useSelector(getPurchasesQuantity);

  return (
    <Wrapper>
      <Item>
        <MenuBtn>
          <HomeSvg />
          <BtnText>Home</BtnText>
        </MenuBtn>
      </Item>
      <Item>
        <MenuBtn>
          <ShoulderSvg />
          <BtnText>Shop</BtnText>
        </MenuBtn>
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
