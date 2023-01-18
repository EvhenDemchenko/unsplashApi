import {createSlice} from "@reduxjs/toolkit";
import {IImagesUrls} from "../../models/unsplash.model";

interface IInitialState {
    urls: Array<IImagesUrls>,
    searchInputValue: string
}

const initialState: IInitialState = {
    urls: [],
    searchInputValue: ''
}

export const unsplashSlice = createSlice({
    name: 'unsplashSlice',
    initialState,
    reducers: {
        setUrls: (state, action) => {
            state.urls = [...state.urls, ...action.payload]
        },
        setNewImages: (state, action) => {
            state.urls = action.payload
        },
        setSearchInputValue: (state, action) => {
            state.searchInputValue = action.payload
        }
    }
})

export const unsplashActions = unsplashSlice.actions
export const unsplashReducers = unsplashSlice.reducer