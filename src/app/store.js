import { configureStore } from "@reduxjs/toolkit";
import mainReducer from '../components/main/mainSlice'

export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
})