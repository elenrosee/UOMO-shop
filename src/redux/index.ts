export { store } from "./store";

export type { RootState } from "./store";

export {
  login,
  register,
  logout,
  addToShopingCart,
  addToWishList,
  removeFromWishList,
} from "./userSlice";

export {
  getIsLoggedIn,
  getUserData,
  getUserShopingCart,
  getUserWishlist,
  getPurchasesQuantity,
} from "./userSelectors";
