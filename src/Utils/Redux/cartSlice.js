import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
         const newBook =   state.items.filter((item)=> item.id != action.payload);
         state.items = newBook;
        }
        ,
        clearCart:(state, action)=>{
            state.items.length=0;
        }
    }
})
export const {addItem ,removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;