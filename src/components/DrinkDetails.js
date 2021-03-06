import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import { Table } from "semantic-ui-react";
import "./CardItem.css";

export const DrinkDetails = (props) => {
  const url = useLocation().pathname.split("/")[1];
  const [isLoading, setLoading] = useState(true);
  const [newDrink, setNewDrink] = useState({});

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + url)
      .then((res) => {
        console.log("Drink Tings:", res);
        setNewDrink(res.data.drinks[0]);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div className="Loading">LOADING YOUR DRINK</div>;
  }
  console.log(newDrink);
  return (
    <div className="topRecipeContainer">
      <div className="recipeContainer">
        <div className="recipeName">{newDrink.strDrink}</div>

        <div className="imgContainer">
          <img src={newDrink.strDrinkThumb} className="recipeImg" />
        </div>
      </div>

      <table className="tableContainer">
        <thead className="tableHead">
          <tr>
            <thead colspan="2">Ingredients:</thead>
          </tr>
        </thead>

        <tbody>
          <tr>
            {newDrink.strIngredient1 ? (
              <td>{newDrink.strIngredient1}</td>
            ) : null}

            {newDrink.strMeasure1 ? <td>{newDrink.strMeasure1}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient2 ? (
              <td>{newDrink.strIngredient2}</td>
            ) : null}

            {newDrink.strMeasure2 ? <td>{newDrink.strMeasure2}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient3 ? (
              <td>{newDrink.strIngredient3}</td>
            ) : null}

            {newDrink.strMeasure3 ? <td>{newDrink.strMeasure3}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient4 ? (
              <td>{newDrink.strIngredient4}</td>
            ) : null}

            {newDrink.strMeasure4 ? <td>{newDrink.strMeasure4}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient5 ? (
              <td>{newDrink.strIngredient5}</td>
            ) : null}

            {newDrink.strMeasure5 ? <td>{newDrink.strMeasure5}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient6 ? (
              <td>{newDrink.strIngredient6}</td>
            ) : null}

            {newDrink.strMeasure6 ? <td>{newDrink.strMeasure6}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient7 ? (
              <td>{newDrink.strIngredient7}</td>
            ) : null}

            {newDrink.strMeasure7 ? <td>{newDrink.strMeasure7}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient8 ? (
              <td>{newDrink.strIngredient8}</td>
            ) : null}

            {newDrink.strMeasure8 ? <td>{newDrink.strMeasure8}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient9 ? (
              <td>{newDrink.strIngredient9}</td>
            ) : null}

            {newDrink.strMeasure9 ? <td>{newDrink.strMeasure9}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient10 ? (
              <td>{newDrink.strIngredient10}</td>
            ) : null}

            {newDrink.strMeasure10 ? <td>{newDrink.strMeasure10}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient11 ? (
              <td>{newDrink.strIngredient11}</td>
            ) : null}

            {newDrink.strMeasure11 ? <td>{newDrink.strMeasure11}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient12 ? (
              <td>{newDrink.strIngredient12}</td>
            ) : null}

            {newDrink.strMeasure12 ? <td>{newDrink.strMeasure12}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient13 ? (
              <td>{newDrink.strIngredient13}</td>
            ) : null}

            {newDrink.strMeasure13 ? <td>{newDrink.strMeasure13}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient14 ? (
              <td>{newDrink.strIngredient14}</td>
            ) : null}

            {newDrink.strMeasure14 ? <td>{newDrink.strMeasure14}</td> : null}
          </tr>
          <tr>
            {newDrink.strIngredient15 ? (
              <td>{newDrink.strIngredient15}</td>
            ) : null}

            {newDrink.strMeasure15 ? <td>{newDrink.strMeasure15}</td> : null}
          </tr>
        </tbody>

        <Table.Footer>
          <tr>
            <thead>
              <tr>Instructions:</tr>
              {newDrink.strInstructions}
            </thead>
          </tr>
        </Table.Footer>
      </table>
    </div>
  );
};
