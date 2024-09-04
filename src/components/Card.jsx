import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card bg-white  text-base-100 w-32 sm:w-40 h-[320px] overflow-hidden flex flex-col justify-between  border border-slate-400 shadow-xl mx-2 ">
      <Link
        to={`/bookDetail/${item?.id}`}
        className="no-underline text-current inline"
      >
        <figure className="h-36 mt-3">
          <img
            src={item?.cover_image}
            alt="Book image"
            className="w-[120px] h-[160px] rounded-2xl "
          />
        </figure>
        <div className="px-2">
          <div className="">
            <h2 className="card-title text-[12px]  sm:text-[12px] font-extrabold ">
              {item?.title}
            </h2>
            <p className="text-[9px] poppins-light-italic">{item?.author}</p>
          </div>
          <div className="flex gap-1 mt-2 ">
            <span className="font-extrabold">₹{item?.current_price} </span>
            <span className="text-slate-400 line-through">
              ₹{item?.original_price}
            </span>
            <span className="text-success">{item?.discount_percentage}%</span>
          </div>
        </div>
      </Link>
      <div className="mb-2">
      <AddToCart item={item} />
      </div>

    </div>
  );
};

export default Card;
