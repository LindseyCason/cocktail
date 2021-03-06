import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";

export const DrinkDetails = () => {
  const [state, setstate] = useState({});
  const url = useLocation().pathname.split("/")[1];

  let newDrink = {
    name: "",
  };

  //   useEffect(() => {
  //     console.log(url);

  //     axios
  //       .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + url)
  //       .then((res) => {
  //         console.log("Drink Tings:", res);
  //         newDrink.name = res.data.drinks[0].strDrink;
  //       });

  //     console.log(newDrink);
  //     return () => {
  //       <div></div>;
  //     };
  //   }, []);

  return <div>{newDrink.name}</div>;
};
