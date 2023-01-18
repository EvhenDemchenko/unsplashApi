import {configureStore} from "@reduxjs/toolkit";
import {unsplashApi} from "./unsplash/unsplash.api";
import {unsplashReducers} from "./unsplash/unsplash.slice";

export const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        unsplash : unsplashReducers
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), unsplashApi.middleware]
})

export type RootState = ReturnType<typeof store.getState>