import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { data } from "../Ingredients";
import { Card } from "semantic-ui-react";
import { ShowRecipe } from "./Recipe";

export const IngredientsForm = () => {
  let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  const [drinkArray, setDrinkArray] = useState([]);
  const [option, setOption] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [key, setKey] = useState([]);
  const [val, setVal] = useState([]);

  //Sets drink array for dropdown
  const getByIngredient = (baseURL, option) => {
    axios.get(baseURL + option).then((res) => {
      // console.log(res.data.drinks);
      setDrinkArray(res.data.drinks);
    });
    return drinkArray;
  };

  //Sets Drink Ingredient When Selected from DropDown and displays them
  const handleChange = (selectedOption) => {
    setOption(selectedOption.value);
    getByIngredient(baseURL, selectedOption.value);
  };

  //When recipe is selected, recipe is displayed in modal.

  const getRecipe = (drinkID) => {
    let ing = [];
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID
      )
      .then((res) => {
        let drink = res.data.drinks[0];
        setInstructions(Object.values(drink.strInstructions));
        setKey(Object.keys(drink));
        setVal(Object.values(drink));

        // setIngredients([...ingredients, values[x]]);

        //if key includes strIngredient and value != null || "" the setIngrd([...ingred, value])

        // return drinkArray;
      });
    let x;
    for (x in key) {
      if (key[x].includes("strIngredient") && val[x] != null) {
        ing.push(val[x]);
      }
    }
    setIngredients(ing);
  };

  return (
    <>
      {/* Dropdown For Ingredients */}
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Select options={data} onChange={handleChange} />
          </div>
          <div className="col-md-4" />
        </div>
      </div>

      {/* Display of Cards */}
      <div className="x">
        <div className="drinkContainer">
          {drinkArray.map((drink) => (
            <div>
              <div
                className="eachDrinkContainer"
                onClick={() => setTimeout(getRecipe(drink.idDrink), 3000)}

                // {() => {
                //   {
                //     getRecipe(drink.idDrink);
                //   }
                // }}
              >
                <div>
                  <li>{drink.strDrink}</li>
                  <img
                    src={drink.strDrinkThumb}
                    alt="Drink"
                    key="pic"
                    className="drinkImage"
                    id={drink.idDrink}
                  />
                  Ingredients:{" "}
                  {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                  Directions: {instructions}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
