import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkList } from "./DrinkList";
import { Card, Image, Segment, Button } from "semantic-ui-react";
import "./MainMenu.css";
import "../images/random-Medium.png";
import { Search } from "./Search";
import { FaAngleDoubleDown, FaSearch } from "react-icons/fa";
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
      <img
        className="homeImage"
        src="https://i.pinimg.com/originals/15/aa/a1/15aaa168198dc23de0a2fb1edacc4a8a.jpg"
      />
      <div className="topMainMenuContainer">
        <div className="welcome">
          WELCOME!
          <div className="welcomeText">
            Search any ingredient on the right, scroll down for some quick
            options or choose a random drink! Cheers!<p></p>
          </div>
        </div>

        {/* search */}
        <div className="searchDiv">
          {/* <div className="searchText" onKeyUp={checkSubmit}>
          </div> */}
          <input
            className="searchBox"
            type="text"
            value={search}
            placeholder="Ingredient Search"
            onChange={handleInputChange}
          />
          <button
            className="searchButton"
            color="google plus"
            href={`/${search}`}
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </div>
        {/* end search */}
      </div>

      <div className="iconContainer">
        <div className="iconImage">
          <FaAngleDoubleDown className="downArrow" />
        </div>
      </div>
      <div className="mainMenu">
        {DrinkMenu.map((drink) => {
          return (
            <Card href={drink.url} className="cardBox">
              <Image
                src={
                  "https://www.thecocktaildb.com/images/ingredients/" +
                  drink.url +
                  "-Medium.png"
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{drink.type}</Card.Header>
              </Card.Content>
            </Card>
          );
        })}

        <Card href={"random"} className="cardBox">
          <Image
            src={"https://purepng.com/public/uploads/large/drinks-wra.png"}
            className="ranImg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Random</Card.Header>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};
