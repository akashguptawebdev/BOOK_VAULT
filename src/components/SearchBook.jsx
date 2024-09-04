import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchItem } from "../Utils/Redux/SearchSlice.js"; // Import your action
import { Link } from "react-router-dom";

const SearchBook = () => {
  const [inputValue, setInputValue] = useState(""); // Initialize state with an empty string
  const [searchedBook, setSearchedBook] = useState([]);
  const dispatch = useDispatch();


  const bookStoreItem = useSelector((store) => store.Books.items);

  useEffect(() => {
    if (!inputValue) {
      // Reset search if input is empty
      setSearchedBook([]);
      dispatch(addSearchItem([]));
      return;
    }

    // Convert input value to lowercase for case-insensitive comparison
    const lowercasedInput = inputValue.toLowerCase();

    // Filter books based on the input value across multiple fields
    const filteredBooks = bookStoreItem.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercasedInput) ||
        item.author.toLowerCase().includes(lowercasedInput) ||
        item.genre.some((genre) =>
          genre.toLowerCase().includes(lowercasedInput)
        ) ||
        item.description.toLowerCase().includes(lowercasedInput)
    );

    if(filteredBooks.length !=0){
    setSearchedBook(filteredBooks);
    }else{
        setSearchedBook("")
    }
    dispatch(addSearchItem(filteredBooks));
  }, [inputValue, bookStoreItem, dispatch]);

  // Handler to hide search results
  const handleCardClick = () => {
    setInputValue("");
    setSearchedBook([]);
  };

  

  return (
    <>
      {/* Search Bar */}
      <div className="px-5 sm:px-20">
        <form className="flex justify-center items-center bg-gray-200 text-black rounded-md">
          <input
            type="text"
            value={inputValue}
            placeholder="Search for Book, Author and more..."
            className="w-full py-2 px-4 bg-gray-200 rounded-md focus:outline-none placeholder-text-sm placeholder-text-lg"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Search Results */}
      {
        searchedBook && (
            <div
        className={`justify-center bg-slate-200 rounded-md items-center  absolute top-32 sm:top-16 sm:w-[70%] h-80 overflow-x-hidden     p-4 ${
          inputValue ? "absolute top-20 z-50 bg-base-200" : "hidden"
        }`}
      >
        {searchedBook.map((item) => (
          <Link to={`/bookDetail/${item?.id}`}>
            <div
              key={item.id}
              className=" w-[90vw] sm:w-full   px-2 shadow-md mb-1 z-30 "
              onClick={handleCardClick}
            >
              <div className="flex bg-white border">
                <div className="w-12 p-2">
                  <img src={item.cover_image} alt="" />
                </div>
                <div className="flex flex-col justify-center ">
                  <h1 className="text-slate-900 text-sm">{item.title}</h1>
                  <p className="text-sm"> {item.author}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
        )
      }
      
    </>
  );
};

export default SearchBook;
