import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { DrinkCard } from "./DrinkCard";
import "./MainMenu.css";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

//THIS IS FOR THE LIST OF DRINK PER TYPE
export const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = useLocation().pathname.split("/")[1];

  useEffect(() => {
    let non = "filter.php?a=";
    let alc = "lookup.php?i=";

    if (url === "Non-Alcoholic") {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
        )
        .then((res) => {
          console.log("HIT IN NON", res);
          let info = res.data.drinks;
          setDrinks(info);
          setLoading(false);
        });
    } else {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${url}`)
        .then((res) => {
          console.log("HIT IN ALC", res);

          let info = res.data.drinks;
          setDrinks(info);
          setLoading(false);
        });
    }
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
            type="2"
          />
        );
      })}
    </div>
  );
};
