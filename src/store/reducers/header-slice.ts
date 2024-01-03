import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewState {
    activeHeader: string;
}

const initialState: NewState = {
    activeHeader: 'standart',
};

const headerReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {
        headerChange: (state: NewState, action: PayloadAction<string>) => {
            state.activeHeader = action.payload;
        },
    },
});

export interface RootState {
    header: NewState;
}

export const { headerChange } = headerReducer.actions;

export default headerReducer.reducer;
