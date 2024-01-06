import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/slices/userSlice";
import cartReducer from "../Components/slices/cartSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});
