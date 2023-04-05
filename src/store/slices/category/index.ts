import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '@store/actions/category';

export interface ICategorySlice {
    categories: any[],
    categoriesLoading: boolean;
}

const initialState: ICategorySlice = {
    categories: [],
    categoriesLoading: false
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.categories = payload;
                state.categoriesLoading = false;
            })
            .addCase(getCategories.pending, (state, { payload }) => {
                state.categoriesLoading = true;
            })
    }
})

export default categorySlice.reducer
