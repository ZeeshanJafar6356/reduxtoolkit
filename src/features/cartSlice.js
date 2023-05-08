// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import ProductData from '../ProductData';
const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state, action) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log('Cart-Total', cartTotal);
          console.log('Cart-Item', cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    incrementItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    // decrementItemQuantity: (state, action) => {
    //   state.cart = state.cart.map((item) => {
    //     if (item.id === action.payload && item.quantity > 0) {
    //       return { ...item, quantity: item.quantity - 1 };
    //     }
    //     return item;
    //   });
    // },
    decrementItemQuantity: (state, action) => {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
  },
});
export const {
  addToCart,
  getCartTotal,
  removeItem,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
