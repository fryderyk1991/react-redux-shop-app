import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import interfaceSlice from './reducers/interfaceSlice';
import userSlice from './reducers/userSlice';
import favoriteSlice from './reducers/favoriteSlice';
import cartSlice from './reducers/cartSlice';


const rootReducer = combineReducers({
    products: productsSlice,
    interface: interfaceSlice,
    user: userSlice,
    favorites: favoriteSlice,
    cart: cartSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export default store