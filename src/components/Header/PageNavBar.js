import { NavBarWrapper, PageNavLink } from "./PageNavBar.styled";

export const PageNavBar = ({ openMobileNavBarToggle = false }) => {
  return (
    <NavBarWrapper>
      <PageNavLink
        to="/home"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        HOME
      </PageNavLink>
      <PageNavLink
        to="/shop/new-in"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        SHOP
      </PageNavLink>
      <PageNavLink
        to="/colection"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        COLLECTION
      </PageNavLink>
      <PageNavLink
        to="/journal"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        JOURNAL
      </PageNavLink>
      <PageNavLink
        to="/lookbook"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        LOOKBOOK
      </PageNavLink>
      <PageNavLink
        to="/pages"
        onClick={() => openMobileNavBarToggle && openMobileNavBarToggle()}
      >
        PAGES
      </PageNavLink>
    </NavBarWrapper>
  );
};
