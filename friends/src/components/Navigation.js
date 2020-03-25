import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink style={{margin: "0 1rem"}} to="/login">Login </NavLink>
      <NavLink style={{margin: "0 1rem"}} to="/home"> Friends </NavLink>
    </nav>
  );
};

export default Navigation;
