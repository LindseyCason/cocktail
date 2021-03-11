import React, { useState, useEffect } from "react";
import {
  FaAngleDoubleDown,
  FaEnvelope,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaHamburger,
  FaLine,
  FaRegEnvelopeOpen,
  FaTimes,
  FaTwitterSquare,
  FaXingSquare,
} from "react-icons/fa";

export const Hamburger = () => {
  const [isVisible, setVisible] = useState("hamburgerMenuHidden");

  const toggle = () => {
    if (isVisible === "hamburgerMenuHidden") {
      console.log("changing to visible");
      setVisible("hamburgerMenuShow");
    } else {
      console.log("changing to hidden");

      setVisible("hamburgerMenuHidden");
    }
  };
  return (
    <>
      <a className="hamMenu" onClick={toggle}>
        {isVisible === "hamburgerMenuHidden" ? (
          <FaHamburger className="hamIcon" />
        ) : (
          <FaTimes className="hamIcon" />
        )}
      </a>
      <div className={("hamburgerMenu", isVisible)}>
        <a href="/" className="hamLink">
          HOME
        </a>
        <a href="#mainMenu" className="hamLink">
          MENU
        </a>
        <a href="/random" className="hamLink">
          RANDOM DRINK
        </a>
        <a href="#footer" className="hamLink">
          CONTACT ME
        </a>
      </div>
    </>
  );
};
