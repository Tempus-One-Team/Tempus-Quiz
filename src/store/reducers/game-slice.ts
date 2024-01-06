import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewState {
    gameStatus: string;
}

const initialState: NewState = {
    gameStatus: 'inactive',
};

const gameReducer = createSlice({
    name: 'game',
    initialState,
    reducers: {
        onGameStatusChange: (state: NewState, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        },
    },
});

export interface RootState {
    header: NewState;
}

export const { onGameStatusChange } = gameReducer.actions;

export default gameReducer.reducer;
