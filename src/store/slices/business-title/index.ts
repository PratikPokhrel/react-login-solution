import { createSlice  } from '@reduxjs/toolkit';
import businessTitleAtions from '@store/actions/business-title';
import { IBusinessTitleSlice } from '@ts/interfaces/slices/business-title/ibusiness-title-slice';

const initialState: IBusinessTitleSlice = {
    businessTitles: [],
    businessTitlesLoading: false,
    creteBusinessTitleLoading: false
}

export const businessTitleSlice = createSlice({
    name: 'businessTitle',
    initialState,
    reducers: {

    },
    
    extraReducers: (builder) => {
        builder
            .addCase(businessTitleAtions.getBusinessTitle.fulfilled, (state, { payload }) => {
                state.businessTitles = payload;
                state.businessTitlesLoading = false;
            })
            .addCase(businessTitleAtions.getBusinessTitle.pending, (state) => {
                state.businessTitlesLoading = true;
            }).
            addCase(businessTitleAtions.createBusinessTitle.pending, (state) => {
                state.creteBusinessTitleLoading = true;
            })
            .addCase(businessTitleAtions.createBusinessTitle.fulfilled, (state, { payload }) => {
                if (payload.succeeded)
                    state.businessTitles.push(payload);
                state.creteBusinessTitleLoading = false;
            })
            .addCase(businessTitleAtions.deleteBusinessTitle.pending, (state, { payload }) => {
                state.businessTitlesLoading = true;
            })
            .addCase(businessTitleAtions.deleteBusinessTitle.fulfilled, (state, { payload }) => {
                state.businessTitles = state.businessTitles.filter(e => e.id !== payload.id);
                state.businessTitlesLoading = false;
            })
    }
})
export default businessTitleSlice.reducer;