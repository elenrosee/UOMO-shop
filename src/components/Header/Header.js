import { LogoSvg } from "icons";
import {
  HeartSvg,
  LoupeSvg,
  NavIconSvg,
  ShoppingBagSvg,
  UserSvg,
} from "../../icons";
import {
  HeaderWraper,
  PageNavLink,
  PageNavLinkMenu,
  UserMenu,
  UserMenuBtn,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWraper>
      <LogoSvg />
      <PageNavLinkMenu>
        <PageNavLink to="/home">HOME</PageNavLink>
        <PageNavLink to="/shop">SHOP</PageNavLink>
        <PageNavLink to="/colection">COLLECTION</PageNavLink>
        <PageNavLink to="/journal">JOURNAL</PageNavLink>
        <PageNavLink to="/lookbook">LOOKBOOK</PageNavLink>
        <PageNavLink to="/pages">PAGES</PageNavLink>
      </PageNavLinkMenu>
      <UserMenu>
        <li>
          <UserMenuBtn>
            <LoupeSvg />
          </UserMenuBtn>
        </li>
        <li>
          <UserMenuBtn>
            <UserSvg />
          </UserMenuBtn>
        </li>
        <li>
          <UserMenuBtn>
            <HeartSvg />
          </UserMenuBtn>
        </li>
        <li>
          <UserMenuBtn className="shopping-bag" shoppingCounter={3}>
            <ShoppingBagSvg />
          </UserMenuBtn>
        </li>
        <li>
          <UserMenuBtn>
            <NavIconSvg />
          </UserMenuBtn>
        </li>
      </UserMenu>
    </HeaderWraper>
  );
};
