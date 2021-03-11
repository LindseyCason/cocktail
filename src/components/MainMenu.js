import React, { useState, useEffect } from "react";
import { DrinkMenu } from "../data/DrinkMenu";
import "./MainMenu.css";
import "../images/random-Medium.png";
import { Search } from "./Search";
import { FaAngleDoubleDown, FaSearch } from "react-icons/fa";
import { DrinkCard } from "./DrinkCard";
export const MainMenu = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {});

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    setLoading(false);
    console.log("inside the submit function on main menu ", search);
  };

  const checkSubmit = (e) => {
    //it triggers by pressing the enter key
    let key = e;
    console.log(key);
    if (key === 13) {
      handleSubmit();
      console.log("ENTER");
    }
  };

  if (!isLoading) {
    return <Search url={search} />;
  }

  return (
    <>
      <div className="topMainMenuContainer" id="mainMenu">
        <div className="homeTextTop">LET THE GOOD DRINKS FLOW!</div>

        {/* SEARCH */}
        <form className="searchDiv" onSubmit={handleSubmit}>
          <div className="searchText">Search for a drink or an ingredient.</div>
          <input
            className="searchBox"
            type="text"
            value={search}
            placeholder="Search"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="searchButton"
            href={`/${search}`}
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* MENU OF CARDS */}
      <div className="mainMenu">
        {DrinkMenu.map((drink) => {
          let srcurl;
          if (drink.url == "non_alcoholic") {
            srcurl =
              "https://www.thecocktaildb.com/images/ingredients/Cherry%20Cola.png";
          } else if (drink.url == "random") {
            srcurl =
              "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg";
          } else {
            srcurl =
              "https://www.thecocktaildb.com/images/ingredients/" +
              drink.url +
              "-Medium.png";
          }
          return (
            <DrinkCard
              href={"/" + drink.url}
              url={drink.url}
              className="cardBox"
              id={drink.id}
              img={srcurl}
              name={drink.type}
              type="1"
            />
          );
        })}

        {/* <a href={"random"} className="cardBox"></a>
        <div href={"/random"} className="cardBox">
          <img
            src={"https://purepng.com/public/uploads/large/drinks-wra.png"}
            className="cardImage"
          />
          <div className="cardContent">Random</div>
        </div> */}
      </div>
    </>
  );
};
