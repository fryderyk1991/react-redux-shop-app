import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import interfaceSlice from './reducers/interfaceSlice';
import userSLice from './reducers/userSLice';


const rootReducer = combineReducers({
    products: productsSlice,
    interface: interfaceSlice,
    user: userSLice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store