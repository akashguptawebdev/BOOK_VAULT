import React from "react";

import Card from "./Card";

const DisplayBookByCategory = ({ filteredBooks }) => {
  return (
    <>
      <div>
        <h1 className="text-xl text-black font-bold sm:text-2xl m-5">
          {filteredBooks?.length > 6
            ? "All Category "
            : filteredBooks && filteredBooks[0]?.genre?.join(", ")}
        </h1>
        <div className="flex flex-wrap sm:justify-center gap-y-5 ">
          {filteredBooks?.map((book) => (
            <div className="sm:mx-4" key={book.id}>
              <Card item={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayBookByCategory;
