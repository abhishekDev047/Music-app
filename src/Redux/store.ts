import { configureStore } from "@reduxjs/toolkit";
import visualReducer from "./features/querySlice"; 

 export const store = configureStore({
    reducer:{
        visual: visualReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;