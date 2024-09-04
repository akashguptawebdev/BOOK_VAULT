import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardBook = ({ bookItem }) => {
  // Use slice instead of splice to avoid modifying the original array
  const fourItems = bookItem?.slice(0, 4);

  // Correct conditional check
  if (!fourItems || fourItems.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <div className="text-start px-8 mb-6 rounded-md bg-slate-100 py-2 text-black font-extrabold flex justify-between items-center ">
        <h1 className="text-xl sm:text-2xl poppins-bold">
          {fourItems[0]?.genre.join(" , ")}
        </h1>
        <button>
          <Link to={`/BrowseBookPage/${fourItems[0]?.genre}`}>
            <h1 className="text-red-400">VIEW ALL &gt;</h1>
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 ">
        {fourItems.map((item) => (
          // Added key prop to the Card component
          <div className="sm:mx-16" key={item.id}>
            <Card key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBook;
