import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as services from '@network/service';

export const getCategories = createAsyncThunk('category/getCategories', async () => {
    try {
        const response: any = await services.post(`http://127.0.0.1:5001/v1/category/GetCategoryPaged`, {
            "sortBy": "",
            "sortOrder": "",
            "searchText": "",
            "pageSize": 10,
            "pageNumber": 1
        }, undefined, false);
        return response.data.items;
    } catch (error) {
    }
})