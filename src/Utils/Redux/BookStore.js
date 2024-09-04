
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import bookReducer from "./BookSlice.js";
import searchReducer from "./SearchSlice.js"
const bookStore = configureStore({
    reducer:{
        cart:cartReducer,
        Books:bookReducer,
        search:searchReducer
    }
})


export default bookStore;