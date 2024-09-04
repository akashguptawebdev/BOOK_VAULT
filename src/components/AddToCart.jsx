import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/Redux/cartSlice';
import { useSelector } from 'react-redux';
const AddToCart = ({item}) => {
  const cartItem = useSelector(store => store.cart.items)

  const Dispatch = useDispatch()
  const HandleAddBook = ()=>{

    Dispatch(addItem( item))
  }

  return (
    <div className=' p-2 flex justify-end'>
        <button className="border bg-red-500 text-white font-bold  rounded-md p-2 px-6  text-[10px]" onClick={HandleAddBook}>ADD TO CART</button>
    </div>
  )
}

export default AddToCart