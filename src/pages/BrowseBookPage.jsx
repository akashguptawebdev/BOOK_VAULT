import React, { useEffect, useState } from "react";
import FilterByCategory from "../components/FilterByCategory";
import DisplayBookByCategory from "../components/DisplayBookByCategory";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const BrowseBookPage = () => {
  const books = useSelector((store) => store.Books.items);
  const { categoryName } = useParams();
  const [filteredBooks, setFilteredBooks] = useState();
  const [index, setIndex] = useState();

  // Filter book by category
  useEffect(() => {
    if (!categoryName) {
      setFilteredBooks(books);
    } else {
      const FilteredBooks = books?.filter(
        (item) =>
          item?.genre.join(",")?.toLowerCase() === categoryName?.toLowerCase()
      );
      setFilteredBooks(FilteredBooks);
    }

    if (categoryName) {
      const index = books?.findIndex((book) =>
        book.genre.includes(categoryName?.split(",")[0])
      );
      setIndex(index);
    } else {
      setIndex(null);
    }
  }, [categoryName]);
  return (
    <div>
      <div className="flex  mt-20">
        <FilterByCategory books={books} defaultIndex={index} />
        <DisplayBookByCategory
          categoryName={categoryName}
          filteredBooks={filteredBooks}
        />
      </div>
    </div>
  );
};

export default BrowseBookPage;
