import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { DrinkDetails } from "./DrinkDetails";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export const DrinkCard = (props) => {
  return (
    <div className="cardBox">
      <Card href={props.id}>
        <Image src={props.img + "/preview"} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            {/* <span className='date'>Joined in 2015</span> */}
          </Card.Meta>
          {/* <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description> */}
        </Card.Content>
      </Card>
    </div>
  );
};
