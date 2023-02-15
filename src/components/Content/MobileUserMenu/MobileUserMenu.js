import { HeartSvg, HomeSvg, ShoppingBagSvg, ShoulderSvg } from "icons";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 10px 65px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const MenuBtn = styled.button`
  background: inherit;
  border: none;
`;

export const BtnText = styled.p`
  margin-top: 10px;
`;

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
