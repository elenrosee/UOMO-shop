const getIsLoggedIn = (state) => state.user.isLoggedIn;

const getUserData = (state) => state.user.user.email;

const getUserShopingCart = (state) => state.user.shopingCart;

const getPurchasesQuantity = (state) => {
  const sumOfQuantitiesInShoppingCart = state.user.shopingCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return sumOfQuantitiesInShoppingCart;
};

const getUserWishlist = (state) => state.user.wishlist;

export {
  getIsLoggedIn,
  getUserData,
  getUserShopingCart,
  getUserWishlist,
  getPurchasesQuantity,
};
