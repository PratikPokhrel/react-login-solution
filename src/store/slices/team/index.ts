import teamActions from '@store/actions/team';
import { createSlice} from '@reduxjs/toolkit';
import { ITeamSlice } from '@ts/interfaces/slices/team/iteam-slice';

const initialState: ITeamSlice = {
    teams: [],
    teamsLoading: false
}

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(teamActions.getTeamsPaged.fulfilled, (state, { payload }) => {
                state.teams = payload;
                state.teamsLoading = false;
            })
            .addCase(teamActions.getTeamsPaged.pending, (state) => {
                state.teamsLoading = true;
            })
    }
})

export default teamSlice.reducer
