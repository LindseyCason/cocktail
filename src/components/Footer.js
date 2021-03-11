import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import {
  FaAngleDoubleDown,
  FaEnvelope,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaPhoneSquare,
  FaRegEnvelopeOpen,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footContainer" id="footer">
      <a href="mailto:lindseyacason@gmail.com" className="footerIcon">
        <FaEnvelopeSquare />
      </a>
      <a href="https://www.twitter.com/iacceptcookies" className="footerIcon">
        <FaTwitterSquare />
      </a>
      <a href="https://www.github.com/lindseycason" className="footerIcon">
        <FaGithubSquare />
      </a>
      <a href="tel:15045643792" className="footerIcon">
        <FaPhoneSquare />
      </a>
    </div>
  );
};
