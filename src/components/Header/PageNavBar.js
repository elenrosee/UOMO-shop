import { NavBarWrapper, PageNavLink } from "./PageNavBar.styled";

export const PageNavBar = ({ openMobileNavBarToggle }) => {
  return (
    <NavBarWrapper>
      <PageNavLink to="/home" onClick={() => openMobileNavBarToggle()}>
        HOME
      </PageNavLink>
      <PageNavLink to="/shop" onClick={() => openMobileNavBarToggle()}>
        SHOP
      </PageNavLink>
      <PageNavLink to="/colection" onClick={() => openMobileNavBarToggle()}>
        COLLECTION
      </PageNavLink>
      <PageNavLink to="/journal" onClick={() => openMobileNavBarToggle()}>
        JOURNAL
      </PageNavLink>
      <PageNavLink to="/lookbook" onClick={() => openMobileNavBarToggle()}>
        LOOKBOOK
      </PageNavLink>
      <PageNavLink to="/pages" onClick={() => openMobileNavBarToggle()}>
        PAGES
      </PageNavLink>
    </NavBarWrapper>
  );
};
