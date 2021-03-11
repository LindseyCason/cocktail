import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Hamburger } from "./Hamburger";

export const Nav = () => {
  return (
    // <div className="nav_container">
    //   <Link to="/">Menu</Link>
    // </div>
    <>
      <div className="NavContainer">
        <img
          src="https://i.ibb.co/Yt8JQjJ/flamingo-logo3.png"
          className="logo"
          alt="flamingo-logo3"
        />
        <a href="/">
          <div className="navText">SWIZZLE HUB</div>
        </a>

        {/* <a href="/random">
          <button className="navButton">RANDOM DRINK</button>
        </a>
        <a href="/">
          <button className="navButton">HOME</button>
        </a> */}

        <Hamburger />
      </div>
    </>
  );
};
