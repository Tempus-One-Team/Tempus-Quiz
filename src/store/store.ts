import footerReducer from './reducers/footer-slice';
import gameReducer from './reducers/game-slice';
import headerReducer from './reducers/header-slice';
import themeReducer from './reducers/theme-slice';
import userLoginReducer from './reducers/user-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    theme: themeReducer,
    header: headerReducer,
    footer: footerReducer,
    user: userLoginReducer,
    game: gameReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
export const persister = persistStore(store);
