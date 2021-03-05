import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import "./MainMenu.css";

export const DrinkList = (props) => {
  const drinkArray = props;
  console.log("ayyyy", drinkArray);
  return <h1>HELLO</h1>;
};
