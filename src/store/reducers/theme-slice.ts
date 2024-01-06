import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface NewState {
    darkTheme: boolean;
}

export const initialState: NewState = {
    darkTheme: false,
};

const themeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state: NewState, action: PayloadAction<boolean>) => {
            state.darkTheme = action.payload;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { toggleTheme } = themeReducer.actions;

export default themeReducer.reducer;
