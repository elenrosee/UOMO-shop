import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "common";
import {
  LogoSvg,
  HeartSvg,
  LoupeSvg,
  NavIconSvg,
  ShoppingBagSvg,
  UserSvg,
} from "icons";
import {
  HeaderWraper,
  PageNavLink,
  PageNavLinkMenu,
  UserMenu,
  UserMenuBtn,
} from "./Header.styled";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <>
      {isMobile && (
        <HeaderWraper>
          <UserMenuBtn>
            <NavIconSvg />
          </UserMenuBtn>
          <LogoSvg />
          <UserMenuBtn>
            <ShoppingBagSvg shoppingCounter={3} />
          </UserMenuBtn>
        </HeaderWraper>
      )}
      {isDesctop && (
        <HeaderWraper>
          <PageNavLinkMenu>
            <LogoSvg />
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
              <UserMenuBtn>
                <ShoppingBagSvg shoppingCounter={3} />
              </UserMenuBtn>
            </li>
            <li>
              <UserMenuBtn>
                <NavIconSvg />
              </UserMenuBtn>
            </li>
          </UserMenu>
        </HeaderWraper>
      )}
    </>
  );
};
