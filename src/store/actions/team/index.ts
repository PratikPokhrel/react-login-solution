import { createAsyncThunk } from '@reduxjs/toolkit';
import * as services from '@network/service';
import { api } from '@network/apis';

export const getTeamsPaged = createAsyncThunk('Team/GetTeamsPaged', async () => {
    try {
        const response: any = await services.get(api.team.getAll, {
            "orderBy": "",
            "sortOrder": "",
            "searchText": "",
            "page": 1,
            "pageSize": 10
        }, false);
        return response.data.items;
    } catch (error) {
    }
});


export default {
    getTeamsPaged
}