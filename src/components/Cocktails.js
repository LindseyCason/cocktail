import React, { useState, useEffect } from "react";
import axios from "axios";
/////use this as an example. Change back to plants API before portfolio obviously
import { Ingredients } from "./Form";

export const Cocktails = () => {
  let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  let random = "random.php";
  let ingURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  // filter.php?i=
  const [URL, setURL] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const [drinkPic, setDrinkPic] = useState(
    "https://www.thecocktaildb.com/images/media/drink/k2r7wv1582481454.jpg"
  );

  const [drinkID, setDrinkID] = useState("");
  const [drinkMeasure, setDrinkMeasure] = useState("");

  const [drinkName, setDrinkName] = useState("");
  const [drinkIng, setDrinkIng] = useState("");
  const [drinkDir, setDrinkDir] = useState("");
  const [drinkArray, setDrinkArray] = useState([]);

  useEffect(() => {
    getCocktails(URL);
  }, []);

  const getCocktails = (URL) =>
    axios
      .get(URL)
      .then((res) => {
        let drinkImage = res.data.drinks[0].strDrinkThumb;
        setDrinkPic(drinkImage);
        console.log("inside getCocktails");
      })
      .catch((error) => {
        console.log(error);
      });

  const getByIng = (ingURL, drinkIng) => {
    console.log("Get ing hit");
    axios.get(ingURL + drinkIng).then((res) => {
      console.log(res.data.drinks);
      setDrinkArray(res.data.drinks);
    });
  };

  return (
    <>
      {/* <button onClick={() => getCocktails(URL)}>Make me a Drink</button>
      <button onClick={() => getByIng(ingURL, "gin")}>Make me a Gin</button> */}

      <Ingredients />
      <br />
    </>
  );
};
