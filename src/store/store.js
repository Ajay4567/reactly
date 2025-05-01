import { configureStore } from '@reduxjs/toolkit';
import { authReducer, productReducer } from '../slices';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
    },
});

export default store;