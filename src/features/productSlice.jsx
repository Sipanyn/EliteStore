import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  discount: 0,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.count >= 2) {
          item.count -= 1;
        } else {
          return;
        }
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    addtoCart: (state, action) => {
      const exists = state.cart.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    calTotal: (state) => {
      state.total = 0;
      state.cart.forEach((item) => {
        let finalPrice = item.price;
        if (item.discount > 0) {
          finalPrice = item.price * (1 - item.discount / 100);
        }
        state.total += parseFloat((finalPrice * item.count).toFixed(1));
      });
    },
    calDiscount: (state) => {
      state.discount = 0;
      state.cart.forEach((item) => {
        if (item.discount > 0) {
          const discounted = item.price * (1 - item.discount / 100);
          const discountPerItem = item.price - discounted;
          const totalDiscount = discountPerItem * item.count;
          state.discount += parseFloat(totalDiscount.toFixed(1));
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addtoCart,
  removefromCart,
  calTotal,
  calDiscount,
} = productSlice.actions;

export default productSlice.reducer;
