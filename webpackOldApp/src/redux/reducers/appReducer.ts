import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '_redux/store';

export interface IInitialState {
    isDarkTheme: boolean;
}

const initialState: IInitialState = {
    isDarkTheme: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsDarkTheme: (state, action: PayloadAction<boolean>) => {
            state.isDarkTheme = action.payload;
        },
    },
});

export const selectApp = (state: AppState) => state.app;

export const { setIsDarkTheme } =
    appSlice.actions;

export default appSlice.reducer;