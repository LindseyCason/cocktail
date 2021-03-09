import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import {
  FaAngleDoubleDown,
  FaEnvelope,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaRegEnvelopeOpen,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footContainer">
      <a href="mailto:lindseyacason@gmail.com" className="footerIcon">
        <FaEnvelopeSquare />
      </a>
      <a href="https://www.twitter.com/iacceptcookies" className="footerIcon">
        <FaTwitterSquare />
      </a>
      <a href="https://www.github.com/lindseycason" className="footerIcon">
        <FaGithubSquare />
      </a>
    </div>
  );
};
