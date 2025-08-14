import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],       // array of cart items
  total: 0,        // total price
  itemCount: 0     // total quantity of items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      state.itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      state.itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      state.itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
