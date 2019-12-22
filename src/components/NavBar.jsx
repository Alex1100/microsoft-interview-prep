import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/component/accordion">Accordion</Link></li>
        <li><Link to="/component/autocomplete">AutoComplete</Link></li>
        <li><Link to="/component/progressBar">Progress Bar</Link></li>
      </ul>
    </div>
  )
};

export default NavBar;
