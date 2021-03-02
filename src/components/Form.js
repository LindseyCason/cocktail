import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const Ingredients = () => {
  const Alcohol = [
    { label: "Vodka", value: "vodka" },
    { label: "Rum", value: "rum" },
    { label: "Water", value: "water" },
    { label: "Gin", value: "gin" },
  ];
  let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  const [drinkArray, setDrinkArray] = useState([]);

  const getByIngredient = (baseURL, option) => {
    axios.get(baseURL + option).then((res) => {
      console.log(res.data.drinks);
      setDrinkArray(res.data.drinks);
    });
    return drinkArray;
  };

  const [option, setOption] = useState("");

  const handleChange = (selectedOption) => {
    setOption(selectedOption.value);
    getByIngredient(baseURL, selectedOption.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Select options={Alcohol} onChange={handleChange} />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
      <div className="x">
        <div className="drinkContainer">
          {drinkArray.map((drink) => (
            <div>
              <div className="eachDrinkContainer">
                <div>
                  <li>{drink.strDrink}</li>
                  <img
                    src={drink.strDrinkThumb}
                    alt="Drink"
                    key="pic"
                    className="drinkImage"
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
