import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "icons";
import { BtnText, Item, MenuBtn, Wrapper } from "./MobileUserMenu.styled";

export const MobileUserMenu = () => {
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
          <HeartSvg />
          <BtnText>Whishlist</BtnText>
        </MenuBtn>
      </Item>
      <Item>
        <MenuBtn>
          <ShoppingBagSvg shoppingCounter={3} />
          <BtnText>Cart</BtnText>
        </MenuBtn>
      </Item>
    </Wrapper>
  );
};
