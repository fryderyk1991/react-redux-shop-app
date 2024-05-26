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
        clearCart(state) {
            state.cartProducts = [];
        }
    }
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer