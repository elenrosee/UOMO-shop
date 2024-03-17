import { RootState } from "./store";

const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

const getUserData = (state: RootState) => state.user.user.email;

const getUserShopingCart = (state: RootState) => state.user.shopingCart;

const getPurchasesQuantity = (state: RootState) => {
  const sumOfQuantitiesInShoppingCart = state.user.shopingCart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return sumOfQuantitiesInShoppingCart;
};

const getUserWishlist = (state: RootState) => state.user.wishlist;

export {
  getIsLoggedIn,
  getUserData,
  getUserShopingCart,
  getUserWishlist,
  getPurchasesQuantity,
};
