import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSerch : false
    },
    reducers : {
        toggleGptSearchView : (state, action) => {
            state.showGptSerch = !state.showGptSerch;
        }   
    }
})

export const {toggleGptSearchView} = GptSlice.actions;
export default GptSlice.reducer;