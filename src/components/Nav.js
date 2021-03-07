import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";

export const Nav = () => {
  return (
    // <div className="nav_container">
    //   <Link to="/">Menu</Link>
    // </div>

    <Segment inverted padded="none" textAlign="right">
      <a href="/random">
        <Button color="google plus">RANDOM DRINK</Button>
      </a>
      <a href="/">
        <Button color="google plus">HOME</Button>
      </a>
    </Segment>
  );
};
