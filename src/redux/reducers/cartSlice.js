import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const id = action.payload;
            state.cartProducts = [...state.cartProducts, id]
        },
        deleteProduct(state, action) {
            const id = action.payload;
            state.cartProducts = state.cartProducts.filter(productId => productId !== id);
        },
        clearCart(state) {
            state.cartProducts = [];
        }
    }
});

export const { addProduct, deleteProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer

export const cartAmount = (state) => state.cart.cartProducts.length;