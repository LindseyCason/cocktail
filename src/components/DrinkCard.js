import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardItem.css";
import { DrinkDetails } from "./DrinkDetails";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export const DrinkCard = (props) => {
  return (
    // <>
    //   <div className="drinkCardContainer" onClick={window.scrollTo(0, 0)}>
    //     <Link
    //       id={props.id}
    //       className="drinkCardSection"
    //       url={props.url}
    //       to={props.id}
    //     >
    //       <img
    //         src={props.img + "/preview"}
    //         alt="cocktail"
    //         className="drinkImage"
    //       />{" "}
    //       <div className="drinkCardTitle">{props.name}</div>
    //     </Link>
    //   </div>{" "}
    //   {/* <DrinkDetails name={props.name} id={props.id} /> */}
    // </>
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
        {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
      </Card>
    </div>
  );
};
