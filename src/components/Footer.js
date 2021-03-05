import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer_container">
      <Link path="/rum">Rum</Link>
      <Link path="/rum">Vodka</Link>
      <Link path="/rum">Gin</Link>
      <Link path="/rum">Scotch</Link>
    </div>
  );
};
