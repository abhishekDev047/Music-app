import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./features/querySlice"; 

export default configureStore({
    reducer:{
        query: queryReducer
    },
});