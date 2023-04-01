import { createSlice } from "@reduxjs/toolkit";


  export const homeSlice = createSlice({
    name: 'home',
    initialState:{
        url:{},
        genres:{}
    },
    reducers: {
        getApiCongiguration: (state, action) =>{
            state.url = action.payload;
        },
        getGenres: (state, action) =>{
        state.genres = action.payload;
        }
     },

  })

  export const {getApiCongiguration, getGenres  } = homeSlice.actions

export default homeSlice.reducer