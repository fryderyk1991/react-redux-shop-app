import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import interfaceSlice from './reducers/interfaceSlice';


const rootReducer = combineReducers({
    products: productsSlice,
    interface: interfaceSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store