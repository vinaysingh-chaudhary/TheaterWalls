import { configureStore } from "@reduxjs/toolkit";
import  homePageSlice  from "./Slices/HomepageSlice";

export const store = configureStore({
    reducer : {
        homeSlice : homePageSlice
    }
})