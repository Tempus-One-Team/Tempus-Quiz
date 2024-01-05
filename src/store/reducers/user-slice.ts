import { createSlice } from '@reduxjs/toolkit';

interface NewState {
    isLogin: boolean;
    UserName: string | null;
    UserEmail: string | null;
    UserPhoto: string | null;
}

const initialState: NewState = {
    isLogin: false,
    UserName: null,
    UserEmail: null,
    UserPhoto: null,
};

const userLoginReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: NewState, action) => {
            state.isLogin = action.payload.isLogin;
            state.UserName = action.payload.UserName;
            state.UserEmail = action.payload.UserEmail;
            state.UserPhoto = action.payload.UserPhoto;
        },
        removeUser: (state) => {
            state.isLogin = false;
            state.UserName = null;
            state.UserEmail = null;
            state.UserPhoto = null;
        },
    },
});

export interface RootState {
    theme: NewState;
}

export const { setUser, removeUser } = userLoginReducer.actions;

export default userLoginReducer.reducer;
