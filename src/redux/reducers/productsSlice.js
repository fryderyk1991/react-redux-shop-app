import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

import { fetchShopData } from '../../providers/apiProvider'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await fetchShopData()
        return response
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`)
    }
})

const initialState = {
    productsData: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productsData = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})


export default productsSlice.reducer;