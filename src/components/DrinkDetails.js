import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./CardItem.css";
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Button,
  Header,
  Modal,
  List,
} from "semantic-ui-react";
import { DrinkMenu } from "../data/DrinkMenu";
import { MainMenu } from "./MainMenu";

export const DrinkDetails = (props) => {
  const url = useLocation().pathname.split("/")[1];
  const [isLoading, setLoading] = useState(true);
  const [newDrink, setNewDrink] = useState({});
  const [open, setOpen] = React.useState(true);
  let x;
  let ingredientsArray = [];
  let measurementArray = [];

  let key = Object.keys(newDrink);
  let val = Object.values(newDrink);

  for (x in key) {
    if (key[x].includes("strIngredient") && val[x] != null) {
      ingredientsArray.push(val[x]);
    } else if (key[x].includes("strMeasure") && val[x] != null) {
      measurementArray.push(val[x]);
    }
  }

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
    return (
      <>
        <Segment>
          <Dimmer active>
            <Loader size="massive" inline="centered">
              POURING IT UP!
            </Loader>
          </Dimmer>
          {/* <Image src="https://specials-images.forbesimg.com/imageserve/5e7e4380f40ef500079f869b/960x0.jpg?fit=scale" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}

          {/* <Loader active inline="centered" /> */}
        </Segment>
      </>
    );
  }
  console.log(newDrink);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>{newDrink.strDrink}</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={newDrink.strDrinkThumb} wrapped />
          <Modal.Description>
            <Header>Here's what you'll need...</Header>

            <List>
              {ingredientsArray.map((i) => {
                let mea;
                measurementArray.map((m) => {
                  mea = m;
                });
                return (
                  <List.Item>
                    <List.Header>{i}</List.Header>
                    {mea}
                  </List.Item>
                );
              })}
              <p>
                <p>
                  {ingredientsArray.map((ing) => {
                    return (
                      <img
                        src={
                          "https://www.thecocktaildb.com/images/ingredients/" +
                          ing +
                          "-Small.png"
                        }
                      />
                    );
                  })}
                </p>

                <List.Item>
                  <List.Header>Glass:</List.Header>
                  {newDrink.strGlass}
                </List.Item>
                <p></p>
                <List.Item>
                  <List.Header>Instructions: </List.Header>
                  {newDrink.strInstructions}
                </List.Item>
              </p>
            </List>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color="black" onClick={() => setOpen(false)} href="/">
            Let's Try Something Else
          </Button> */}
          <Button
            content="GIN"
            labelPosition="right"
            icon="tint"
            onClick={() => setOpen(false)}
            href={"/gin"}
            className="bttnClock"
          />{" "}
          <Button
            content="VODKA"
            labelPosition="right"
            icon="tint"
            onClick={() => setOpen(false)}
            href={"/VODKA"}
            className="bttnCoClock"
          />{" "}
          <Button
            content=" FEELIN LUCKY"
            labelPosition="right"
            icon="shuffle"
            onClick={() => setOpen(false)}
            href={"/random"}
            className="bttnClock"
          />
          <Button
            content="RUM"
            labelPosition="right"
            icon="tint"
            onClick={() => setOpen(false)}
            href={"/rum"}
            className="bttnCoClock"
          />{" "}
          <Button
            content="TEQUILA"
            labelPosition="right"
            icon="tint"
            onClick={() => setOpen(false)}
            href={"/tequila"}
            className="bttnClock"
          />
        </Modal.Actions>
      </Modal>
      <MainMenu />
    </>
  );
};
