import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  LogoSvg,
  HeartSvg,
  LoupeSvg,
  NavIconSvg,
  ShoppingBagSvg,
  UserSvg,
} from "../../icons";
import {
  HeaderWraper,
  UserMenu,
  UserMenuBtn,
  UserMenuNavLink,
} from "./Header.styled";
import { PageNavBar } from "./PageNavBar";
import { useSelector } from "react-redux";
import { Breakpoints } from "../../common";
import { getPurchasesQuantity, getUserWishlist } from "../../redux";

export const Header = () => {
  const [isOpenMobileNavBar, setIsOpenMobileNavBar] = useState<boolean>(false);
  const [isOpenPagesMenu, setIsOpenPagesMenu] = useState<boolean>(false);

  const userWishListQuantity: number = useSelector(getUserWishlist).length;
  const purchasesQuantity: number = useSelector(getPurchasesQuantity);

  const openMobileNavBarToggle = () => setIsOpenMobileNavBar((prev) => !prev);
  const openPagesMenu = () => setIsOpenPagesMenu((prev) => !prev);

  const isMobileOrTablet: boolean = useMediaQuery({
    maxWidth: Breakpoints.md - 1,
  });

  return (
    <>
      {isMobileOrTablet && (
        <>
          <HeaderWraper>
            <UserMenuBtn onClick={openMobileNavBarToggle}>
              <NavIconSvg />
            </UserMenuBtn>
            <LogoSvg />
            <UserMenuBtn>
              <ShoppingBagSvg counter={purchasesQuantity} />
            </UserMenuBtn>
          </HeaderWraper>
          {isOpenMobileNavBar && (
            <PageNavBar
              openMobileNavBarToggle={openMobileNavBarToggle}
              openPagesMenu={openPagesMenu}
              isOpenPagesMenu={isOpenPagesMenu}
            />
          )}
        </>
      )}
      {!isMobileOrTablet && (
        <HeaderWraper>
          <LogoSvg />
          <PageNavBar
            openPagesMenu={openPagesMenu}
            isOpenPagesMenu={isOpenPagesMenu}
          />
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
              <UserMenuNavLink to="/cart">
                <HeartSvg counter={userWishListQuantity} />
              </UserMenuNavLink>
            </li>
            <li>
              <UserMenuNavLink to="/cart">
                <ShoppingBagSvg counter={purchasesQuantity} />
              </UserMenuNavLink>
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
