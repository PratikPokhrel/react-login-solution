import { createAsyncThunk } from '@reduxjs/toolkit';
import * as services from '@network/service';
import { api } from '@network/apis';

export const login = createAsyncThunk('Auth/Login', async (user : {email:string, password:string}) => {
    try {
        const response: any = await services.post(api.auth.login,user, undefined, false);
        return response.data;
    } catch (error) {
    }
});

export default {
    login
}