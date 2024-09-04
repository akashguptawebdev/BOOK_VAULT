import { createSlice } from "@reduxjs/toolkit"
import {Book} from "../BookData.js"
const SearchSlice = createSlice({
    name: "search",
    initialState:{
        items:[...Book],
    },
    reducers:{
        addSearchItem: (state, action) => {
            state.items = [...action.payload];
          },
          clearSearchResults: (state) => {
            // Clear the items array
            state.items = [];
          },
    }
})
export const {addSearchItem} = SearchSlice.actions;
export default SearchSlice.reducer;



