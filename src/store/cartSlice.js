import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const saveCart = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }
};

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((p) => p.id === item.id);
      if (exists) {
        state.items = state.items.filter((p) => p.id !== item.id);
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      saveCart(state.items);
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((p) => p.id === id);
      if (item) item.qty = Math.max(qty, 1);
      saveCart(state.items);
    },
  },
});

export const { toggleCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
