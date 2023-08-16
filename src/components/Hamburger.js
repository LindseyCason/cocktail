import React, { useState, useEffect } from "react";
import {
  FaAngleDoubleDown,
  FaCode,
  FaEnvelope,
  FaEnvelopeSquare,
  FaGithub,
  FaGithubSquare,
  FaHamburger,
  FaInstagram,
  FaLine,
  FaPhone,
  FaQuestion,
  FaRegEnvelopeOpen,
  FaTimes,
  FaTwitter,
  FaTwitterSquare,
  FaXingSquare,
} from "react-icons/fa";

export const Hamburger = () => {
  const [isVisible, setVisible] = useState("hamburgerMenuHidden");
  const [contactOpen, setContactOpen] = useState("contactMenuHidden");

  const toggleContact = () => {
    if (contactOpen === "contactMenuHidden") {
      setContactOpen("contactMenuShow");
    } else {
      setContactOpen("contactMenuHidden");
    }
  };
  const toggle = () => {
    if (isVisible === "hamburgerMenuHidden") {
      setVisible("hamburgerMenuShow");
    } else {
      setVisible("hamburgerMenuHidden");
    }
    if (contactOpen === "contactMenuShow") {
      setContactOpen("contactMenuHidden");
    } else {
      return;
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
        <a href="/random" className="hamLink">
          RANDOM DRINK
        </a>
        <a className="hamLink" onClick={toggleContact}>
          CONTACT ME
        </a>
      </div>

      <div className={("contactMenu", contactOpen)}>
        <FaTimes className="contactIcon" onClick={toggleContact} />
        <a href="tel:15045643792" className="conLink">
          <FaPhone />: 504-564-3792
        </a>
        <a href="mailto:lindseyacason@gmail.com" className="conLink">
          <FaEnvelope />: LindseyACason@gmail.com
        </a>
        <a href="https://github.com/LindseyCason/" className="conLink">
          <FaGithub />: My GitHub
        </a>
        // <a href="https://twitter.com/IAcceptCookies" className="conLink">
        //   <FaTwitter />: @IAcceptCookies
        // </a>
        <a hreg="https://instagram.com/wake.and.bacon" className="conLink">
          <FaInstagram />: Instagram
        </a>
        <a
          href="mailto:lindseyacason@gmail.com?subject=Suggestions%20or%20Comments%20from%20Swizzle%20Hub&body=Hey%20there!%0D%0AThanks%20for%20reaching%20out!%20Feel%20free%20to%20send%20me%20any%20feedback%20you%20may%20have%20below.%0D%0AThank%20you!%0D%0ALindsey%20Cason%0D%0ASwizzle%20Hub"
          target="_blank"
          className="conLink"
        >
          <FaQuestion />: Suggestions or Comments?
        </a>
        <a href="https://github.com/LindseyCason/cocktail" className="conLink">
          <FaCode />: See the code
        </a>
      </div>
    </>
  );
};
