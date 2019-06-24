import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/portfolio">Portfolio</NavLink>
  </header>
);

export default Header;
