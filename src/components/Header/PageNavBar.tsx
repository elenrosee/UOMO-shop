import { FC } from "react";
import { NavBarWrapper, PageNavLink } from "./PageNavBar.styled";

interface PageNavBarProps {
  openMobileNavBarToggle?: () => void;
  openPagesMenu: () => void;
  isOpenPagesMenu: boolean;
}

export const PageNavBar: FC<PageNavBarProps> = ({
  openMobileNavBarToggle = false,
  openPagesMenu,
  isOpenPagesMenu,
}) => {
  return (
    <NavBarWrapper>
      <PageNavLink
        to="/home"
        onClick={() =>
          typeof openMobileNavBarToggle === "function" &&
          openMobileNavBarToggle()
        }
      >
        HOME
      </PageNavLink>
      <PageNavLink
        to="/shop/new-in"
        onClick={() =>
          typeof openMobileNavBarToggle === "function" &&
          openMobileNavBarToggle()
        }
      >
        SHOP
      </PageNavLink>

      {/* <PagesMenuBtn
        className={isOpenPagesMenu ? 'active' : ''}
        onClick={openPagesMenu}
      >
        PAGES
      </PagesMenuBtn> */}
      {/* <PageNavLink
        to="/collection"
        onClick={() =>
          typeof openMobileNavBarToggle === "function" &&
          openMobileNavBarToggle()
        }
      >
        COLLECTION
      </PageNavLink>
      <PageNavLink
        to="/journal"
        onClick={() =>
          typeof openMobileNavBarToggle === "function" &&
          openMobileNavBarToggle()
        }
      >
        JOURNAL
      </PageNavLink> */}
      {/* <PageNavLink
        to="/lookbook"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        LOOKBOOK
      </PageNavLink> */}
    </NavBarWrapper>
  );
};
