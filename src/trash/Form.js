import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { data } from "../data/FullIngredientList";
import { Card } from "semantic-ui-react";
import { Recipe } from "./Recipe";
import { Home } from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const IngredientsForm = () => {
  let x;
  let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  const [drinkArray, setDrinkArray] = useState([]);
  const [option, setOption] = useState("");
  const [drinkID, setDrinkID] = useState("");
  let drinkObj = {
    drinkID: "",
    drinkName: "",
    drinkImg: "",
    ingredientsArray: [],
    measurementArray: [],
    drinkInstructions: "",
    drinkCat: "",
  };
  // let getRecipe = { Recipe };
  // const [drinkObj, setDrinkObj] = useState({});

  //Sets drink array for dropdown
  const getByIngredient = (baseURL, option) => {
    axios.get(baseURL + option).then((res) => {
      setDrinkArray(res.data.drinks);
    });
    return drinkArray;
  };

  //Sets Drink Ingredient When Selected from DropDown and displays them
  const handleChange = (selectedOption) => {
    setOption(selectedOption.value);
    getByIngredient(baseURL, selectedOption.value);
  };

  const getDrinkID = (id) => {
    setDrinkID(id);
    console.log("Got the ID:", id);
    // return drinkID;
  };

  const getDrinkObject = (drinkID) => {
    console.log(drinkID);
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID
      )
      .then((res) => {
        let drink = res.data.drinks[0];
        let key = Object.keys(drink);
        let val = Object.values(drink);

        for (x in key) {
          if (key[x].includes("strIngredient") && val[x] != null) {
            drinkObj.ingredientsArray.push(val[x]);
          } else if (key[x].includes("strMeasure") && val[x] != null) {
            drinkObj.measurementArray.push(val[x]);
          }
        }

        drinkObj.drinkID = drink.idDrink;
        drinkObj.drinkName = drink.strDrink;
        drinkObj.drinkInstructions = drink.strInstructions;
        drinkObj.drinkImg = drink.strDrinkThumb;
        drinkObj.drinkCat = drink.strCategory;
        console.log("inside getDrinkObject");
      });
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
                onClick={() => {
                  getDrinkID(drink.idDrink), getDrinkObject(drink.idDrink);
                }}
              >
                <Link to={`${"/drink/" + drink.idDrink}`}>
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
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Recipe id={drinkID} name={drinkObj.name} />
        {/* <Home id={drinkID} /> */}
      </div>
    </>
  );
};
