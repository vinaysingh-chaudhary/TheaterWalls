import { createSlice } from "@reduxjs/toolkit";

export const homePageSlice = createSlice({
  name: "HomePage",
  initialState: {
    imgUrl: {
        
    },
    genres: {

    },

  },
  reducers: {
    getAPIConfiguration: (state, action) => {
        state.imgUrl = action.payload;
    },

    genresAPICall: (state, action) => {
        state.genres = action.payload;
    },
  },
});

export const {getAPIConfiguration, genresAPICall} = homePageSlice.actions; 
export default homePageSlice.reducer;
