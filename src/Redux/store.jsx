import { configureStore } from "@reduxjs/toolkit";
import  homePageSlice  from "./Slices/HomePageSlice";

export const store = configureStore({
    reducer : {
        homeSlice : homePageSlice
    }
})