import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import interfaceSlice from './reducers/interfaceSlice';
import userSlice from './reducers/userSlice';
import favoriteSlice from './reducers/favoriteSlice';


const rootReducer = combineReducers({
    products: productsSlice,
    interface: interfaceSlice,
    user: userSlice,
    favorites: favoriteSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export default store