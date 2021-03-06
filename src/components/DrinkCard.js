import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { DrinkDetails } from "./DrinkDetails";
import { Link } from "react-router-dom";

export const DrinkCard = (props) => {
  return (
    <div className="drinkCardContainer">
      <Link
        id={props.id}
        className="drinkCardSection"
        url={props.url}
        to={props.id}
      >
        <img src={props.img} alt="cocktail" className="drinkImage" />{" "}
        <div className="drinkCardTitle">{props.name}</div>
      </Link>
    </div>
  );
};
//STUCK IN AN INFINITE LOOP
