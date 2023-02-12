import { NavBarWrapper, PageNavLink } from "./PageNavBar.styled";

export const PageNavBar = () => {
  return (
    <NavBarWrapper>
      <PageNavLink to="/home">HOME</PageNavLink>
      <PageNavLink to="/shop">SHOP</PageNavLink>
      <PageNavLink to="/colection">COLLECTION</PageNavLink>
      <PageNavLink to="/journal">JOURNAL</PageNavLink>
      <PageNavLink to="/lookbook">LOOKBOOK</PageNavLink>
      <PageNavLink to="/pages">PAGES</PageNavLink>
    </NavBarWrapper>
  );
};
