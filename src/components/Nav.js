import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";

export const Nav = () => {
  return (
    // <div className="nav_container">
    //   <Link to="/">Menu</Link>
    // </div>

    <div className="NavContainer">
      <a href="/random" className="navBttn">
        <Button color="google plus">RANDOM DRINK</Button>
      </a>
      <a href="/" className="navBttn">
        <Button color="google plus">HOME</Button>
      </a>
    </div>
  );
};
