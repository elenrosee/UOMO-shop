import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserType = {
  name: string | null;
  email: string | null;
};

type UserPurchaseProductType = {
  id: string;
  size: string;
  color: string;
  quantity: number;
  img: string[];
  mobImg: string[];
};

type StateType = {
  user: UserType;
  wishlist: string[];
  shopingCart: UserPurchaseProductType[];
  isLoggedIn: boolean;
};

const initialState: StateType = {
  user: { name: null, email: null },
  wishlist: [],
  shopingCart: [],
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
    register: (state, action: PayloadAction<UserType>) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
    logout: (state, _) => {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    },
    addToShopingCart: (
      state,
      action: PayloadAction<UserPurchaseProductType>,
    ) => {
      const { id, size, color, quantity } = action.payload;

      const stateProduct = state.shopingCart.find(
        (i) => i.id === id && i.size === size && i.color === color,
      );

      if (stateProduct) {
        const newStateProduct = {
          ...action.payload,
          quantity: (stateProduct.quantity += quantity),
        };

        state.shopingCart = [
          { ...newStateProduct },
          ...state.shopingCart?.filter(
            (i) =>
              i.id !== id ||
              (i.id === id && i.color !== color && i.size !== size),
          ),
        ];
      } else {
        state.shopingCart = [{ ...action.payload }, ...state.shopingCart];
      }
    },
    removeFromShopingCart: (state, action: PayloadAction<string>) => {
      state.shopingCart = state.shopingCart?.filter(
        (i) => i.id !== action.payload,
      );
    },
    addToWishList: (state, action: PayloadAction<string>) => {
      state.wishlist = [action.payload, ...state.wishlist];
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist?.filter((i) => i !== action.payload);
    },
  },
});

export const {
  login,
  register,
  logout,
  addToShopingCart,
  addToWishList,
  removeFromWishList,
} = userSlice.actions;

export default userSlice.reducer;

// export const userReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(login, (state, action) => {
//       state.user = { ...action.payload }
//       state.isLoggedIn = true
//     })

//     .addCase(register, (state, action) => {
//       state.user = { ...action.payload }
//       state.isLoggedIn = true
//     })

//     .addCase(logout, (state, _) => {
//       state.user = { name: null, email: null }
//       state.isLoggedIn = false
//     })

//     .addCase(addToShopingCart, (state, action) => {
//       const { id, size, color, quantity } = action.payload

//       const stateProduct = state.shopingCart.find(
//         (i) => i.id === id && i.size === size && i.color === color
//       )

//       if (stateProduct) {
//         const newStateProduct = {
//           id,
//           size,
//           color,
//           quantity: (stateProduct.quantity += quantity),
//         }

//         state.shopingCart = [
//           { ...newStateProduct },
//           ...state.shopingCart?.filter(
//             (i) =>
//               i.id !== id || (i.id === id && i.color !== color && i.d !== size)
//           ),
//         ]
//       } else {
//         state.shopingCart = [{ ...action.payload }, ...state.shopingCart]
//       }
//     })

//     .addCase(removeFromShopingCart, (state, action) => {
//       state.shopingCart = state.shopingCart?.filter(
//         (i) => i.id !== action.payload.id
//       )
//     })

//     .addCase(addToWishList, (state, action) => {
//       state.wishlist = [...action.payload, ...state.wishlist]
//     })

//     .addCase(removeFromWishList, (state, action) => {
//       state.wishlist = state.wishlist?.filter((i) => i !== action.payload)
//     })
// })
