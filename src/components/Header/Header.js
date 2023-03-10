import { useState } from "react";
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
import { HeaderWraper, UserMenu, UserMenuBtn } from "./Header.styled";
import { PageNavBar } from "./PageNavBar";

export const Header = () => {
  const [isOpenMobileNavBar, setIsOpenMobileNavBar] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isTablet = useMediaQuery({ minWidth: Breakpoints.md });

  const openMobileNavBarToggle = () => {
    isOpenMobileNavBar
      ? setIsOpenMobileNavBar(false)
      : setIsOpenMobileNavBar(true);
  };

  return (
    <>
      {isMobile && (
        <>
          <HeaderWraper>
            <UserMenuBtn onClick={openMobileNavBarToggle}>
              <NavIconSvg />
            </UserMenuBtn>
            <LogoSvg />
            <UserMenuBtn>
              <ShoppingBagSvg shoppingCounter={3} />
            </UserMenuBtn>
          </HeaderWraper>
          {isOpenMobileNavBar && (
            <PageNavBar openMobileNavBarToggle={openMobileNavBarToggle} />
          )}
        </>
      )}
      {isTablet && (
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
