import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkList } from "./DrinkList";
import { Card, Image, Segment, Button } from "semantic-ui-react";
import "./MainMenu.css";
import "../images/random-Medium.png";
import { Search } from "./Search";

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

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  if (!isLoading) {
    return <Search url={search} />;
  }

  return (
    <>
      <div className="topMainMenuContainer">
        <img
          className="homeImage"
          src="https://i.pinimg.com/originals/15/aa/a1/15aaa168198dc23de0a2fb1edacc4a8a.jpg"
        />
        {/* search */}

        <div className="searchDiv overlay">
          <input
            className="searchBox"
            type="text"
            value={search}
            placeholder=""
            onChange={handleInputChange}
          />
          <Button
            color="google plus"
            href={`/${search}`}
            onClick={handleSubmit}
            onKeyPress={handleKeypress}
          >
            SEARCH
          </Button>
        </div>
        {/* end search */}
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
