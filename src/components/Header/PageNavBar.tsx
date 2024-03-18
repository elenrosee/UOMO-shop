import { FC } from "react";
import { NavBarWrapper, PageNavLink } from "./PageNavBar.styled";

interface PageNavBarProps {
  openMobileNavBarToggle?: () => void;
}

export const PageNavBar: FC<PageNavBarProps> = ({
  openMobileNavBarToggle = false,
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
      <PageNavLink
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
      </PageNavLink>
      {/* <PageNavLink
        to="/lookbook"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        LOOKBOOK
      </PageNavLink> */}
      <PageNavLink
        to="/pages"
        onClick={() =>
          typeof openMobileNavBarToggle === "function" &&
          openMobileNavBarToggle()
        }
      >
        PAGES
      </PageNavLink>
    </NavBarWrapper>
  );
};
