import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import chatIndexReducer from "./chatIndexSlice";

export const store = configureStore({
    reducer : {
        chat : chatReducer,
        chatIndex : chatIndexReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;