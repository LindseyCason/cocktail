import axios from "axios";
import React, { useState, useEffect } from "react";

export const ShowRecipe = (drinkID) => {
  console.log("Recipe Module Hit", drinkID);
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID)
    .then((res) => {
      console.log("Chicken Coop", drinkID, res);
      let cat = res.data.drinks[0].strIngredient1;
    });

  return (
    <>
      <h1>Ingredients</h1>
      <cat></cat>
    </>
  );
};
