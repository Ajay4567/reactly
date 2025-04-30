import { configureStore } from '@reduxjs/toolkit';
import { authReducer, productsReducer } from '../slices';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
    },
});

const { loginSuccess, loginFailure, logout } = authSlice.actions;
const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

export default store;