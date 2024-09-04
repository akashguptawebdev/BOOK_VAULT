import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FilterByCategory = ({ books, defaultIndex }) => {
  const Item = books; // Assigning books to a variable for easy reference.
  const [stateindex, setIndex] = useState(defaultIndex || 0); // State to keep track of the selected genre.
  const [bool , setBool]= useState(true);

  // Filter to get items with unique genres, removing duplicates.
  const uniqueGenres = Item?.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.genre[0] === item.genre[0])
  );

  return (
    <div className="flex flex-col  items-center px-4 sm:px-6 md:px-4">
      {/* Link to navigate back to the home page */}
      <Link to="/">
        <button className="flex items-center text-black hover:text-pink-700 mb-6">
          <span className="text-lg">
            <img
              src="/left_3514167.png"
              className="w-6 sm:w-8 m-2"
              alt="Back to Home"
            />
          </span>
          <span className="text-lg hidden sm:block sm:text-lg font-semibold">Back to Home</span>
        </button>
      </Link>
        <div className={`w-6 block p-1 sm:hidden relative ${bool?" left-0":"left-24"}  top-10 `} onClick={()=>setBool(!bool)}>
          <img src={`${bool?"/right-arrow.png":"/delete.png"}`} alt="" />
        </div>
      
      {/* Container for displaying unique genres */}
      <div onClick={()=>setBool(!bool)} className={`w-full ${bool?'hidden':""} sm:block bg-white mt-4 px-2 py-4 border-2 border-pink-200 rounded-lg shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl`}>
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">
          Choose a Genre
        </h2>
        <div className="flex flex-col gap-4 px-4">
          {uniqueGenres?.map((item, index) => (
            <div
              key={item.id}
              className={`border cursor-pointer border-pink-300 px-1 shadow-md rounded-lg transition-transform transform hover:scale-105 ${
                index === stateindex ? "bg-pink-100" : ""
              }`}
              onClick={() => setIndex(index)}
            >
              {/* Link to navigate to the specific genre's page */}
              <Link to={`/BrowseBookPage/${item.genre}`}>
                <label
                  htmlFor={item.author}
                  className={`text-lg sm:text-lg font-medium ${
                    index === stateindex ? "text-pink-700" : "text-gray-700"
                  }`}
                >
                  {/* Display the genre name(s) */}
                  <h1 className="cursor-pointer w-40">{item.genre.join(" , ")}</h1>
                </label>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
