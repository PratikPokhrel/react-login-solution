import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@network/apis';
import * as services from '@network/service';

/**
 * Action method to get the list of business rules
 * @returns list of business rule objects.
 */
 const getBusinessTitle = createAsyncThunk('BusinessTitle/GetBusinessTitles', async () => {
    try {
        const response: any = await services.get(api.businessTitle.getAll);
        return response.data;
    } catch (error) {
    }
});

/**
 * Action method to create a new business rule
 * @returns api response success/failure.
 */
 const createBusinessTitle = createAsyncThunk('BusinessTitle/Create', async ({ bt, callBack }: any) => {
    try {
        const response: any = await services.post(api.businessTitle.create, bt, callBack);
        return response;
    } catch (error) {
    }
});

/**
 * Action method to delete a  business rule
 * @returns api response success/failure.
 */
 const deleteBusinessTitle = createAsyncThunk('BusinessTitle/Delete', async ({ bt, callBack }: any) => {
    try {
        const response: any = await services.deletion(api.businessTitle.deletion, bt.id, callBack);
        return bt;
    } catch (error) {
    }
});

export default {
    getBusinessTitle,
    createBusinessTitle,
    deleteBusinessTitle
}