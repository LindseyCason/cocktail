import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DrinkMenu } from "../data/DrinkMenu";
import { DrinkList } from "./DrinkList";
import { Card, Image, Segment } from "semantic-ui-react";
import "./MainMenu.css";
import "../images/random-Medium.png";

export const MainMenu = () => {
  return (
    <>
      <Segment basic>
        <Image src="https://i.pinimg.com/originals/15/aa/a1/15aaa168198dc23de0a2fb1edacc4a8a.jpg" />
      </Segment>
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
