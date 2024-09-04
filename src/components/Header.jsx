import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBook from "./SearchBook";
const Header = () => {
  const cartItem = useSelector(store => store.cart.items)
  return (
    <div className="navbar bg-base-100 flex justify-between sm:px-5 md:px-10 lg-px-20 fixed top-0 z-40">
      <div className="navbar-start w-52 ">
        <div className="dropdown  sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/BrowseBookPage">Browse Books</Link>
            </li>
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
          </ul>
        </div>

       
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl poppins-bold-italic">BookVault</Link>
        </div>
      </div>

      <div className="  hidden md:block w-full">
        <SearchBook />
      </div>

      <div className="hidden sm:block px-5">
        <ul
            tabIndex={0}
            className="flex   bg-base-100  z-[1]  gap-10 text-sm  shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li >
            <Link to="/BrowseBookPage">Browse Books</Link>
            </li>
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
          </ul>
        </div>

      <button className="btn btn-ghost btn-circle">
        <Link to="/cartPage">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l1 6h8l1-6M5.4 5L4 2M16 21a2 2 0 110-4 2 2 0 010 4zM9 21a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>

          <span className="badge badge-xs badge-error indicator-item text-white font-medium" >{cartItem.length}</span>
        </div>
        </Link>
       
      </button>
    </div>
  );
};

export default Header;
