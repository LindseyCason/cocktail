import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { DrinkDetails } from "./DrinkDetails";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export const DrinkCard = (props) => {
  let url;
  let img;
  if (props.type === "1") {
    url = props.name;
  } else {
    url = props.id;
  }
  return (
    <a href={url} className="cardBox">
      <div id={props.id} raised="true">
        <img src={props.img} className="cardImage" wrapped ui={false} />
        <div className="cardContent">{props.name}</div>
      </div>
    </a>
  );
};

//I NEED TO GET THE ID TO THE CARD
