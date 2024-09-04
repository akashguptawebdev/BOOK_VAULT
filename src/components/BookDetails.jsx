import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import NavigateBack from "./navigateBack";
import SearchBook from "./SearchBook";

const BookDetails = () => {
  const { id } = useParams();  // Destructured useParams for readability
  const books = useSelector((store) => store.Books.items);
  const [filterBook, setFilterBook] = useState(null);  // Initialized with null for consistency
  if(!id){
    console.log("not id")
  }
  useEffect(() => {
    if (books.length > 0) {
      const foundBook = books.find((item) => item.id === parseInt(id));  // Ensured strict equality with parseInt
      setFilterBook(foundBook || null);  // Set to null if no book is found
    }
  }, [books, id]);

  const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(maxStars - Math.floor(rating));

    return (
      <div className="text-yellow-500">
        <span>{filledStars}</span>
        <span>{emptyStars}</span>
      </div>
    );
  };

  if (!filterBook) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-primary">
          <span className="loading loading-spinner"></span>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-5 h-screen bg-white pt-12 sm:pt-0 sm:px-36">
      <div className="flex  justify-center sm:justify-between sm:items-center mt-5 mb-4">
        <div className="flex justify-center sm:justify-start">
          <div className="flex items-center text-blue-500 hover:text-blue-700 sm:mt-16 pb-5 sm:pb-0">
            <NavigateBack />
          </div>
        </div>
        <div className="flex justify-center sm:justify-end sm:hidden">
          <SearchBook />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start pt-10 sm:pt-20">
        {/* Product Image */}
        <div className="w-full sm:w-1/4 flex justify-center items-center">
          <img
            src={filterBook.cover_image}
            alt="Book Cover"
            className="w-40 sm:w-60 rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full sm:w-1/2 sm:pl-10 pl-6 mt-4 px-2">
        <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 poppins-black">{filterBook.title}</h1>
        <div className="flex items-center mt-2">
            <span className="text-lg text-yellow-500">{filterBook.rating}</span>
            <StarRating rating={filterBook.rating} />
          </div>
        </div>
          <p className="text-sm text-gray-500 mt-2 underline">
            <strong>By:</strong> {filterBook.author}
          </p>
         
          <p className="text-xs sm:text-lg text-gray-700 mt-4">{filterBook.description}</p>
          <div className="mt-5 flex justify-end">
            <AddToCart item={filterBook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
