const getIsLoggedIn = (state) => state.user.isLoggedIn;

const getUserData = (state) => state.user.user.email;

const getUserShopingCart = (state) => state.user.shopingCart;

const getUserWishlist = (state) => state.user.wishlist;

export { getIsLoggedIn, getUserData, getUserShopingCart, getUserWishlist };
