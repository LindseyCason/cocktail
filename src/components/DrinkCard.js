import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { DrinkDetails } from "./DrinkDetails";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export const DrinkCard = (props) => {
  return (
    <div className="cardBox">
      <Card href={props.id} raised="true">
        <Image src={props.img + "/preview"} wrapped ui={false} />
        <Card.Content>
          <Card.Header extra>{props.name}</Card.Header>
          <Card.Meta></Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};
