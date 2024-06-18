import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, set } from "firebase/database";
import { database } from "../../../firebase/firebaseConfig";

const initialState = {
  cartProducts: [],
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const cartRef = ref(database, `users/${userId}/cart`);
  const snapshot = await get(cartRef);
  return snapshot.exists() ? snapshot.val() : [];
});

export const saveCart = createAsyncThunk("cart/saveCart", async ({ userId, cartProducts }) => {
    const cartRef = ref(database, `users/${userId}/cart`);
    await set(cartRef, cartProducts);
    return cartProducts;
  });

  export const deleteProductFromCart = createAsyncThunk("cart/deleteProduct", async ({ userId, productId }) => {
    const cartRef = ref(database, `users/${userId}/cart`);
  const snapshot = await get(cartRef);
  if (snapshot.exists()) {
    const cartProducts = snapshot.val();
    const updatedCartProducts = cartProducts.filter(id => id !== productId);
    await set(cartRef, updatedCartProducts);
    return productId;
  }
  return null;
  });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartProducts = action.payload;
    });
    builder.addCase(saveCart.fulfilled, (state, action) => {
      state.cartProducts = action.payload;
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      const productId = action.payload;
      if (productId) {
        state.cartProducts = state.cartProducts.filter(
          (id) => id !== productId
        );
      }
    });
  }
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartAmount = (state) => state.cart.cartProducts.length;
