import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { data } from "../Ingredients";

export const IngredientsForm = () => {
  let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  const [drinkArray, setDrinkArray] = useState([]);

  const getByIngredient = (baseURL, option) => {
    axios.get(baseURL + option).then((res) => {
      // console.log(res.data.drinks);
      setDrinkArray(res.data.drinks);
    });
    return drinkArray;
  };

  const [option, setOption] = useState("");

  const handleChange = (selectedOption) => {
    setOption(selectedOption.value);
    getByIngredient(baseURL, selectedOption.value);
  };

  //Recipe

  const showRecipe = (drinkID) => {
    console.log("inside show rec func ", drinkID);
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID
      )
      .then((res) => alert(res.data.drinks[0].strInstructions));
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

      {/* Dispplay of Cards */}
      <div className="x">
        <div className="drinkContainer">
          {drinkArray.map((drink) => (
            <div>
              <div
                className="eachDrinkContainer"
                onClick={() => {
                  showRecipe(drink.idDrink);
                }}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
