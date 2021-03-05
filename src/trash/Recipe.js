import axios from "axios";
import React, { useState, useEffect } from "react";
import { IngredientsForm } from "./Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Recipe = (props) => {
  // import { name }
  // let x;
  // const { id } = useParams();
  // let drinkIDnum = id;
  // const [drinkObj, setDrinkObj] = useState({
  //   drinkID: drinkIDnum,
  //   drinkName: "",
  //   drinkImg: "",
  //   ingredientsArray: [],
  //   measurementArray: [],
  //   drinkInstructions: "",
  //   drinkCat: "",
  // });
  // // let drinkObject = {
  // //   drinkID: drinkIDnum,
  // //   drinkName: "",
  // //   drinkImg: "",
  // //   ingredientsArray: [],
  // //   measurementArray: [],
  // //   drinkInstructions: "",
  // //   drinkCat: "",
  // // };
  // axios
  //   .get(
  //     "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkIDnum
  //   )
  //   .then((res) => {
  //     // console.log("res inside axios", res);
  //     let drink = res.data.drinks[0];
  //     let key = Object.keys(drink);
  //     let val = Object.values(drink);

  //     for (x in key) {
  //       if (key[x].includes("strIngredient") && val[x] != null) {
  //         drinkObj.ingredientsArray.push(val[x]);
  //       } else if (key[x].includes("strMeasure") && val[x] != null) {
  //         drinkObj.measurementArray.push(val[x]);
  //       }
  //     }

  //     drinkObj.drinkID = drink.idDrink;
  //     drinkObj.drinkName = drink.strDrink;
  //     drinkObj.drinkInstructions = drink.strInstructions;
  //     drinkObj.drinkImg = drink.strDrinkThumb;
  //     drinkObj.drinkCat = drink.strCategory;
  //     console.log("End Axios Log line 52> ", drinkObj.drinkName);
  //   });
  // // setDrinkObj(drinkObject);
  // console.log("Before Return Log line 55> ", drinkObj.drinkName);
  return (
    <div>
      <h1>THIS IS THE RECIPE/DRINK PAGE</h1>
      <h2>{props.name}</h2>
    </div>
  );
};
