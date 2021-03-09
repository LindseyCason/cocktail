import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";

export const Nav = () => {
  return (
    // <div className="nav_container">
    //   <Link to="/">Menu</Link>
    // </div>
    <>
      <a href="/" className="logo">
        <img
          src="https://i.ibb.co/ZfxfDks/flamingo-logo-round.png"
          alt="flamingo-logo-round"
          border="0"
          className="logo"
        ></img>{" "}
      </a>

      <div className="NavContainer">
        <a href="/random">
          <button className="navButton" color="google plus">
            RANDOM DRINK
          </button>
        </a>
        <a href="/">
          <button className="navButton" color="google plus">
            HOME
          </button>
        </a>
      </div>
    </>
  );
};
