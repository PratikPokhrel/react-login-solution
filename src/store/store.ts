import { configureStore } from '@reduxjs/toolkit';

import businessTitleReducer from './slices/business-title/index';
import categoryReducer from './slices/category';
import teamReducer from './slices/team';
import loginReducer from './slices/auth';

export const store = configureStore({
    reducer: {
        businessTitle: businessTitleReducer,
        category: categoryReducer,
        team: teamReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch