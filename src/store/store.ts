import headerReducer from './reducers/header-slice';
import themeReducer from './reducers/theme-slice';
import userLoginReducer from './reducers/user-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    theme: themeReducer,
    header: headerReducer,
    userLogin: userLoginReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
