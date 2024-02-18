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
import { HeaderWraper, UserMenu, UserMenuBtn } from "./Header.styled";
import { PageNavBar } from "./PageNavBar";
import { useSelector } from "react-redux";
import {
  getPurchasesQuantity,
  getUserWishlist,
} from "../../redux/user/userSelectors";
import { Breakpoints } from "../../common";

export const Header = () => {
  const [isOpenMobileNavBar, setIsOpenMobileNavBar] = useState(false);

  const wishListLangth = useSelector(getUserWishlist).length;
  const purchasesQuantity = useSelector(getPurchasesQuantity);

  const isMobileOrTablet = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const openMobileNavBarToggle = () => {
    isOpenMobileNavBar
      ? setIsOpenMobileNavBar(false)
      : setIsOpenMobileNavBar(true);
  };

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
              <ShoppingBagSvg shoppingCounter={purchasesQuantity} />
            </UserMenuBtn>
          </HeaderWraper>
          {isOpenMobileNavBar && (
            <PageNavBar openMobileNavBarToggle={openMobileNavBarToggle} />
          )}
        </>
      )}
      {!isMobileOrTablet && (
        <HeaderWraper>
          <LogoSvg />
          <PageNavBar />
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
                <HeartSvg shoppingCounter={wishListLangth} />
              </UserMenuBtn>
            </li>
            <li>
              <UserMenuBtn>
                <ShoppingBagSvg shoppingCounter={purchasesQuantity} />
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
