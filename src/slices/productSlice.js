import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchProductStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
        },
        fetchProductFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = productSlice.actions;
export default productSlice.reducer;