import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkList } from "./DrinkList";
import { Button } from "semantic-ui-react";
import "./MainMenu.css";

export const MainMenu = () => {
  //   const [drinksArray, setDrinksArray] = useState([]);
  //   console.log(DrinkMenu);

  //   const drinkDetail = (url) => {
  //     // DrinkList(url);
  //     if (url == "random") {
  //       console.log("inside random");
  //       axios
  //         .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  //         .then((res) => {
  //           setDrinksArray(res.data.drinks[0]);
  //           console.log("Set Random Drink to:", drinksArray);
  //         });
  //     } else if (url == "non_alcoholic") {
  //       console.log("inside non-alc");

  //       axios
  //         .get(
  //           "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  //         )
  //         .then((res) => {
  //           console.log("Non-Alcoholic Drinks", res.data.drinks);
  //           setDrinksArray(res.data.drinks);
  //         });
  //     } else {
  //       console.log("inside else");

  //       axios
  //         .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + url)
  //         .then((res) => {
  //           setDrinksArray(res.data.drinks);
  //           console.log("Drink By Liquor", res.data.drinks);
  //         });
  //     }

  //     console.log("Drinks Available: ", drinksArray);
  //   };

  return (
    <>
      <div className="mainMenu">
        <Button href="/random">Click Me</Button>
        {DrinkMenu.map((drink) => (
          <div className="mainMenuContainer">
            <Link
              className="cardContainer"
              to={drink.url}
              key={drink.url}
              //   onClick={() => {
              //      drinkDetail(drink.url, drink.type)
              //   }
              // }
            >
              <div className="menuCard">
                <div className="drinkName">{drink.type}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>{" "}
    </>
  );
};
