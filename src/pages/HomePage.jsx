import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import CardBook from "../components/CardBook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBook from "../components/SearchBook";

const HomePage = () => {
  const bookItem = useSelector((store) => store.Books.items);
  const [sci, setSci] = useState();
  const [adv, setAdv] = useState();
  const [fantasy, setFantasy] = useState();
  useEffect(() => {
    const scient = bookItem.filter((item) => item.genre[0] == "Fiction");
    const Adventure = bookItem.filter((item) =>
      item.genre.includes("Adventure")
    );
    const Fantasy = bookItem.filter((item) => item.genre[0] == "Fantasy");

    setSci(scient);
    setAdv(Adventure);
    setFantasy(Fantasy);
  }, []);

  return (
    <div className="  w-full h-full sm:px-20 pt-16">
      <div className="md:hidden mt-2 ">
        {/* <SearchBar /> */}
        <SearchBook />
      </div>
      <div className="Carsoul">
        <Carousel />
      </div>

      {/* Display Book By Category */}
      <div className=" mt-10 ">
        <CardBook bookItem={sci} />
      </div>

      <div className=" mt-10">
        <CardBook bookItem={adv} />
      </div>

      <div className=" mt-10 ">
        <CardBook bookItem={fantasy} />
      </div>

      <div className="text-right mt-8">
        <button className="">
          <Link to={`/BrowseBookPage`}>
            <h1 className="text-red-400 mx-5 p-2 font-bold">MORE &gt;</h1>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
