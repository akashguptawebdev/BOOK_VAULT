import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  {Provider}  from "react-redux";
import bookStore from "./Utils/Redux/BookStore";
import BookDetails from "./components/BookDetails";
import CartPage from "./pages/CartPage";
import AddBookPage from "./pages/AddBookPage";
import DisplayBookByCategory from "./components/DisplayBookByCategory";
import BrowseBookPage from "./pages/BrowseBookPage";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <div className="bg-white">
      <Provider store={bookStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookDetail/:id" element = {<BookDetails/>}></Route>
            <Route path="/BrowseBookPage" element = {<BrowseBookPage/>}></Route>
            <Route path="/BrowseBookPage/:categoryName" element = {<BrowseBookPage/>}></Route>
            <Route path="/DisplayBookByCategory/:categoryName" element = {<DisplayBookByCategory/>}></Route>
            <Route path="/cartPage" element = {<CartPage/>}></Route>
            <Route path="/addBook" element = {<AddBookPage/>}></Route>
            <Route path="/*" element = {<PageNotFound/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
