import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import { basketStateType } from "../../models/Basket";

const initialState: basketStateType = {
  basketItems: [],
  totalBasket: 0,
};

const BasketSlice = createSlice({
  name: "BasketSlice",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInCart = state.basketItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.basketItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.basketItems.find((item) => item.id === action.payload);
      item && item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.basketItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          const removeItem = state.basketItems.filter(
            (item) => item.id !== action.payload
          );
          state.basketItems = removeItem;
        } else {
          item.quantity--;
        }
      }
    },
    clearBasket: (state) => {
      state.basketItems = [];
    },
    setTotalBasket: (state, action) => {
      state.totalBasket = action.payload;
    },
  },
});

export default BasketSlice.reducer;

export const {
  addToBasket,
  incrementQuantity,
  decrementQuantity,
  clearBasket,
  setTotalBasket,
} = BasketSlice.actions;
