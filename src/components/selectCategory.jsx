import React, { useEffect, useState } from "react";
import CardBook from "./CardBook";
import { useSelector } from "react-redux";

const selectCategory = () => {
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


      <CardBook bookItem={sci} /> 
    
  );
};

export default selectCategory;
