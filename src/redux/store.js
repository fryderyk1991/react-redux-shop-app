import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';


const store = configureStore({
    reducer: productsSlice,
})

export default store