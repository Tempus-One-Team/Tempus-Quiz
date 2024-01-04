import { createSlice } from '@reduxjs/toolkit';

interface NewState {
    isLogin: boolean;
    userId: null | string;
}

const initialState: NewState = {
    isLogin: false,
    userId: null,
};

const userLoginReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleUserAuth: (state: NewState, action) => {
            state.isLogin = action.payload.isLogin;
            state.userId = action.payload.userId;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { toggleUserAuth } = userLoginReducer.actions;

export default userLoginReducer.reducer;
