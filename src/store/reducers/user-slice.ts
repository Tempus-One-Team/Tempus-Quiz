import { createSlice } from '@reduxjs/toolkit';

export interface UserType {
    isLogin: boolean;
    UserName: string | null;
    UserEmail: string | null;
    UserPhoto: string | null;
}

const initialState: UserType = {
    isLogin: false,
    UserName: null,
    UserEmail: null,
    UserPhoto: null,
};

const userLoginReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: UserType, action) => {
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
    theme: UserType;
}

export const { setUser, removeUser } = userLoginReducer.actions;

export default userLoginReducer.reducer;
