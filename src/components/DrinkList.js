import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkCard } from "./DrinkCard";
import "./MainMenu.css";
import { MainMenu } from "./MainMenu";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

//THIS IS FOR THE LIST OF DRINK PER
export const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const url = useLocation().pathname.split("/")[1];

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + url)
      .then((res) => {
        let info = res.data.drinks;
        setDrinks(info);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader size="massive">SEARCHING THE BAR!</Loader>
        </Dimmer>
      </Segment>
    );
  }

  return (
    <div className="cardContainer">
      {drinks.map((drink) => {
        return (
          <DrinkCard
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            id={drink.idDrink}
            url={url}
          />
        );
      })}
    </div>
  );
};
