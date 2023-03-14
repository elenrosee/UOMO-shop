import { createAction } from "@reduxjs/toolkit";

export const register = createAction("register");

export const login = createAction(" login");

export const logout = createAction("logout");

export const addToWishList = createAction("addToWishList");

export const removeFromWishList = createAction("removeFromWishList");

export const addToShopingCart = createAction("addToShopingCart");

export const removeFromShopingCart = createAction("removeFromShopingCart");
