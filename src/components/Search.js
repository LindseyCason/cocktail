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
import { ErrorModal } from "./ErrorModal";

export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(0);
  const [e, setE] = useState("");

  useEffect(() => {
    console.log("we're inside the axios");
    console.log("URL PROPS", props.url);
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + props.url
      )
      .then((res) => {
        console.log(res);
        if (res.data.length == 0) {
          axios
            .get(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                props.url
            )
            .then((res) => {
              console.log("drink search hit ", res);

              if (res.data.drinks === null) {
                setLoading(false);
                setIsError(0);
                console.log("ER", isError);
                setE("No Ingredient or Drink Found");
              } else {
                let info = res.data.drinks;
                console.log("RESULTS", info);
                setDrinks(info);
                setIsError(1);
                setLoading(false);
              }
            });
        } else {
          let info = res.data.drinks;
          console.log("ingredient search hit ", info);
          setDrinks(info);
          setIsError(1);

          setLoading(false);
        }
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
    <>
      {isError < 1 ? (
        <ErrorModal error={e} />
      ) : (
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
      )}
    </>
  );
};
