import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

export const Nav = () => {
  return (
    // <div className="nav_container">
    //   <Link to="/">Menu</Link>
    // </div>

    <div className="navContainer">
      <a href="/">
        <div>HOME</div>
      </a>
      <a href="/random">
        <div>RANDOM DRINK</div>
      </a>
    </div>
  );
};
