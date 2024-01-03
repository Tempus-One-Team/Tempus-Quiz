import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewState {
    userTheme: boolean;
}

const initialState: NewState = {
    userTheme: false,
};

const themeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state: NewState, action: PayloadAction<boolean>) => {
            state.userTheme = action.payload;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { toggleTheme } = themeReducer.actions;

export default themeReducer.reducer;
