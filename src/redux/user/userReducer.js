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
      const { id, size, color, quantity } = action.payload;

      const stateProduct = state.shopingCart.find(
        (i) => i.id === id && i.size === size && i.color === color
      );

      if (stateProduct) {
        const newStateProduct = {
          id,
          size,
          color,
          quantity: (stateProduct.quantity += quantity),
        };

        state.shopingCart = [
          { ...newStateProduct },
          ...state.shopingCart?.filter(
            (i) =>
              i.id !== id || (i.id === id && i.color !== color && i.d !== size)
          ),
        ];
      } else {
        state.shopingCart = [{ ...action.payload }, ...state.shopingCart];
      }
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
      state.wishlist = state.wishlist?.filter((i) => i !== action.payload);
    });
});
