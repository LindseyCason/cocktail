import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkCard } from "./DrinkCard";
import "./MainMenu.css";
import { MainMenu } from "./MainMenu";

export const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);

  const url = useLocation().pathname.split("/")[1];
  // setUrl(location);
  console.log("location state", url);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + url)
      .then((res) => {
        let info = res.data.drinks;
        setDrinks(info);
        console.log("Drink By Liquor", res.data.drinks);
        console.log("Drink INFO", drinks);
      });
  }, []);
  return (
    <div className="cardContainer">
      {drinks.map((drink) => {
        return (
          <DrinkCard
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            id={drink.idDrink}
          />
        );
      })}
    </div>
  );
};
