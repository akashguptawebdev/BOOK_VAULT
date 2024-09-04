import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  // State to keep track of the currently displayed image index
  const totalItems = 4;  // Total number of images in the carousel

  useEffect(() => {
    // Set up an interval to change the image every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 2000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="mt-10 px-5">
      {/* Carousel container with centered items */}
      <div className="carousel flex justify-center items-center h-36 rounded-md sm:rounded-lg">
        
        {/* Carousel item 1 */}
        <div
          className={`carousel-item w-[100%] sm:h-52 ${
            currentIndex === 0 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEwPOmbhjDNEjbg-41iT_9PnF21lVIpHuEg&s"
            className="w-full h-full sm:object-fill"
            alt="Slide 1"
          />
        </div>

        {/* Carousel item 2 */}
        <div
          className={`carousel-item w-full sm:h-52 ${
            currentIndex === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxJeuIFyUWgJ-c8ljYdOIheEHE--smOPrlA&s"
            className="w-full h-full sm:object-fill"
            alt="Slide 2"
          />
        </div>

        {/* Carousel item 3 */}
        <div
          className={`carousel-item w-full sm:w-[80%] sm:h-52 ${
            currentIndex === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg"
            className="w-full h-full sm:object-fill"
            alt="Slide 3"
          />
        </div>

        {/* Carousel item 4 */}
        <div
          className={`carousel-item w-full sm:w-[80%] sm:h-52 ${
            currentIndex === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://img.freepik.com/premium-vector/banner-with-books-concept-bookstore-bookshop-advertising-template-mock-up-useful-hobby-love-literature-reading-cartoon-flat-vector-illustration-isolated-pink-background_1002658-558.jpg"
            className="w-full h-full object-fill"
            alt="Slide 4"
          />
        </div>
      </div>

      {/* Dots for navigating between carousel items */}
      <div className="flex w-full justify-center gap-2 py-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <Link
            key={index}
            to={`#item${index + 1}`}  // Link to each carousel item
            className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full ${
              currentIndex === index ? "btn-active" : "bg-red-100"
            }`}
            onClick={() => setCurrentIndex(index)}  // Update currentIndex to show the selected slide
          >
            {/* Empty link component just to trigger the carousel item change */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
