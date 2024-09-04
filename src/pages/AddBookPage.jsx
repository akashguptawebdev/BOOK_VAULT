import React, { useEffect, useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/Redux/BookSlice";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  // State variables to manage book details
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication_year, setPublication_year] = useState("");
  const [genre, setGenre] = useState("Fiction");
  const [description, setDescription] = useState("");
  const [cover_image, setCoverImage] = useState("");
  const [rating, setRating] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [FinalPrice, setFinalPrice] = useState(0);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UID = uid(8); // Unique identifier for the book

  // Function to create a new book object
  const newBook = {
    id: UID,
    title,
    author,
    publication_year,
    genre: [genre],
    description,
    cover_image,
    rating,
    original_price: originalPrice,
    discount_percentage: -discountPercentage,
    current_price: FinalPrice,
  };

  // Handle form submission and add book
  const handleAddBook = () => {
    // Validation to check if all fields are filled
    if (
      !title ||
      !author ||
      !publication_year ||
      !genre ||
      !description ||
      !cover_image ||
      !originalPrice ||
      !discountPercentage ||
      !FinalPrice
    ) {
      setShowError(true);
      return;
    }

    dispatch(addItem(newBook)); // Dispatch action to add book
    navigate(`/BrowseBookPage/${genre}`); // Navigate to book details page
  };

  // Calculate current price after discount
  useEffect(() => {
    if (originalPrice && discountPercentage) {
      const currPriceAfterDisc =
        originalPrice - (originalPrice * discountPercentage) / 100;

      const compressedNum = parseFloat(currPriceAfterDisc.toFixed(1));
      setFinalPrice(compressedNum);
    }
  }, [originalPrice, discountPercentage]);

  return (
    <div className="add-book-page">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="form-container w-full lg:w-[80%] mx-auto px-10 h-full pt-20"
      >
        {/* Title Input Field */}
        <div className="form-group flex flex-wrap -mx-3 mb-6">
          <div className="input-wrapper w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Title
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                title || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* Error message */}
            {showError && !title && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>

          {/* Author Input Field */}
          <div className="input-wrapper w-full md:w-1/2 px-3">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-author"
            >
              Author
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                author || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-author"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            {/* Error message */}
            {showError && !author && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>
        </div>

        {/* Publication Year Input Field */}
        <div className="form-group flex flex-wrap -mx-3 mb-6">
          <div className="input-wrapper w-full px-3">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-publication-year"
            >
              Publication Year
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                publication_year || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-publication-year"
              type="date"
              placeholder="Publication Year"
              value={publication_year}
              onChange={(e) => setPublication_year(e.target.value)}
            />
            {/* Error message */}
            {showError && !publication_year && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>
        </div>

        {/* Genre, Description, Cover Image Fields */}
        <div className="form-group flex flex-wrap -mx-3 mb-2">
          {/* Description Input Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Description
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                description || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* Error message */}
            {showError && !description && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>

          {/* Genre Selection Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-genre"
            >
              Genre
            </label>
            <div className="select-container relative">
              <select
                className="select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                {/* Options for Genre */}
                <option value="Fiction">Fiction</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Satire">Satire</option>
                <option value="Post-Apocalyptic">Post-Apocalyptic</option>
                <option value="Drama">Drama</option>
              </select>
              <div className="select-icon pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="icon fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.548l-6 6-6-6z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cover Image Input Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-cover-image"
            >
              Cover Image URL
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                cover_image || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-cover-image"
              type="text"
              placeholder="Cover Image URL"
              value={cover_image}
              onChange={(e) => setCoverImage(e.target.value)}
            />
            {/* Error message */}
            {showError && !cover_image && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>
        </div>

        {/* Ratings, Price and Discount Fields */}
        <div className="form-group flex flex-wrap -mx-3 mb-2">
          {/* Rating Input Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-rating"
            >
              Rating
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                rating || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-rating"
              type="text"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            {/* Error message */}
            {showError && !rating && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>

          {/* Original Price Input Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-original-price"
            >
              Original Price
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                originalPrice || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-original-price"
              type="number"
              placeholder="Original Price"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
            />
            {/* Error message */}
            {showError && !originalPrice && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>

          {/* Discount Percentage Input Field */}
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-discount-percentage"
            >
              Discount Percentage
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                discountPercentage || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-discount-percentage"
              type="number"
              placeholder="Discount Percentage"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
            {/* Error message */}
            {showError && !discountPercentage && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>
          <div className="input-wrapper w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-discount-percentage"
            >
              Final Price
            </label>
            <input
              className={`input appearance-none block w-full bg-gray-200 text-gray-700 border ${
                FinalPrice || !showError ? "" : `border-red-500`
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-discount-percentage"
              type="number"
              placeholder="Discount Percentage"
              value={FinalPrice}
              onChange={(e) => setFinalPrice(e.target.value)}
            />
            {/* Error message */}
            {showError && !FinalPrice && (
              <div className="error-message text-red-500 text-xs italic">
                Please fill out this field.
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-button flex justify-center">
          <button
            onClick={handleAddBook}
            className="btn-add-book shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookPage;
