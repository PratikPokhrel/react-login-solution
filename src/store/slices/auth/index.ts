import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import loginActions from '@store/actions/login';

export interface IAuthSlice {
    loginLoading: boolean;
}

const initialState: IAuthSlice = {
    loginLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginActions.login.pending, (state, { payload }) => {
                state.loginLoading = true;
            })
            .addCase(loginActions.login.fulfilled, (state, { payload }) => {
                state.loginLoading = false;
            })
    }
})

export default authSlice.reducer
