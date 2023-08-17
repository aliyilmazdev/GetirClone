import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./slices/BasketSlice";

export const store = configureStore({
  reducer: {
    BasketSlice: BasketSlice,
  },
});
