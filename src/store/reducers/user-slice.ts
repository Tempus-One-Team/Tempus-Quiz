import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewState {
    isLogin: boolean;
}

const initialState: NewState = {
    isLogin: false,
};

const userLoginReducer = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        toggleUserAuth: (state: NewState, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { toggleUserAuth } = userLoginReducer.actions;

export default userLoginReducer.reducer;
