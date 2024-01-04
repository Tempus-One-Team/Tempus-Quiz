import { createSlice } from '@reduxjs/toolkit';

interface NewState {
    isLogin: boolean;
}

const initialState: NewState = {
    isLogin: false,
};

const userLoginReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuth: (state: NewState, action) => {
            state.isLogin = action.payload.isLogin;
        },
        removeUser: (state) => {
            state.isLogin = false;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { setUserAuth } = userLoginReducer.actions;

export default userLoginReducer.reducer;
