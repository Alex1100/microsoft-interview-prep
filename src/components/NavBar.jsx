import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleComponentSelect }) => {
  return (
    <div>
      <ul>
        <li onClick={handleComponentSelect}>
          <Link
            data-component-name={`Accordion`}
            to="/"
          >
            Accordion
          </Link>
        </li>
        <li onClick={handleComponentSelect}>
          <Link
            data-component-name={`AutoComplete`}
            to="/"
          >
            AutoComplete
          </Link>
        </li>
        <li onClick={handleComponentSelect}>
          <Link
            data-component-name={`ProgressBar`}
            to="/"
          >
            Progress Bar
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default NavBar;
