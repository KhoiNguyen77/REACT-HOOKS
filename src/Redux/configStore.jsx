import { configureStore } from "@reduxjs/toolkit";
import AppChatReducer from "./Reducer/AppChatReducer";



export const store = configureStore({
    reducer: {
        appChatReducer: AppChatReducer
    }
})