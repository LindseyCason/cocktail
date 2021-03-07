import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Button,
  Header,
  Modal,
  List,
} from "semantic-ui-react";
import { DrinkCard } from "./DrinkCard";

export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("we're inside the axios");
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + props.url
      )
      .then((res) => {
        let info = res.data.drinks;
        console.log("RESULTS", info);
        setDrinks(info);
        setLoading(false);
      });
  }, []);

  //   onSubmit toggle loading to off and then it will render the drinkList page

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
        console.log("inside the map");
        return (
          <DrinkCard
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            id={drink.idDrink}
            url={props.url}
          />
        );
      })}
    </div>
  );
};
