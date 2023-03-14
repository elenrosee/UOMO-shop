import { createReducer } from "@reduxjs/toolkit";

import {
  addToShopingCart,
  addToWishList,
  login,
  logout,
  register,
  removeFromShopingCart,
  removeFromWishList,
} from "./userActions";

const initialState = {
  user: { name: null, email: null },
  wishlist: [],
  shopingCart: [],
  isLoggedIn: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    })

    .addCase(register, (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    })

    .addCase(logout, (state, _) => {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    })

    .addCase(addToShopingCart, (state, action) => {
      state.shopingCart = [{ ...action.payload }, ...state.shopingCart];
    })

    .addCase(removeFromShopingCart, (state, action) => {
      state.shopingCart = state.shopingCart?.filter(
        (i) => i.id !== action.payload.id
      );
    })

    .addCase(addToWishList, (state, action) => {
      state.wishlist = [...action.payload, ...state.wishlist];
    })

    .addCase(removeFromWishList, (state, action) => {
      state.wishlist = state.shopingCart?.filter(
        (i) => i.id !== action.payload.id
      );
    });
});
