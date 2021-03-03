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
  const [drinkObj, setDrinkObj] = useState({});

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

  //When recipe is selected, recipe is displayed in modal.//NOT FUNCTIONING YET

  const getRecipe = (drinkID) => {
    let x;
    let drinkObject = {
      drinkID: "",
      drinkName: "",
      drinkImg: "",
      ingredientsArray: [],
      measurementArray: [],
      drinkInstructions: "",
      drinkCat: "",
    };

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
            drinkObject.ingredientsArray.push(val[x]);
          } else if (key[x].includes("strMeasure") && val[x] != null) {
            drinkObject.measurementArray.push(val[x]);
          }
        }

        drinkObject.drinkID = drink.idDrink;
        drinkObject.drinkName = drink.strDrink;
        drinkObject.drinkInstructions = drink.strInstructions;
        drinkObject.drinkImg = drink.strDrinkThumb;
        drinkObject.drinkCat = drink.strCategory;

        console.log("FULL OBJECT /71", drinkObject);
        setDrinkObj(drinkObject);
        console.log("END OF FUNCTION");
      });

    return <></>;
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
                onClick={() => getRecipe(drink.idDrink)}
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
