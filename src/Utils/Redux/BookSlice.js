
import { createSlice } from "@reduxjs/toolkit"
import {Book} from "../BookData.js"
const bookSlice = createSlice({
    name: "Books",
    initialState:{
        items:[...Book],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop(action.payload);
        }
        ,
        clearCart:(state, action)=>{
            state.items.length=0;
        }
    }
})
export const {addItem ,removeItem , clearCart} = bookSlice.actions;
export default bookSlice.reducer;