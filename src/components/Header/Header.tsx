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
import { Breakpoints } from "../../common";
import { getUserWishlist } from "../../redux/user/userSelectors";

export const Header = () => {
  const [isOpenMobileNavBar, setIsOpenMobileNavBar] = useState<boolean>(false);

  const userWishListQuantity: number = useSelector(getUserWishlist).length;

  const openMobileNavBarToggle = () => setIsOpenMobileNavBar((prev) => !prev);

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
              <ShoppingBagSvg />
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
                <HeartSvg counter={userWishListQuantity} />
              </UserMenuBtn>
            </li>
            <li>
              <UserMenuBtn>
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
      )}
    </>
  );
};
