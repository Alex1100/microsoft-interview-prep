import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ handleComponentSelect }) => {
  return (
    <div>
      <ul>
        <li>
          <Link
            onClick={handleComponentSelect}
            data-component-name={`Accordion`}
            to="/"
          >
            Accordion
          </Link>
        </li>
        <li>
          <Link
            onClick={handleComponentSelect}
            data-component-name={`AutoComplete`}
            to="/"
          >
            AutoComplete
          </Link>
        </li>
        <li>
          <Link
            onClick={handleComponentSelect}
            data-component-name={`ProgressBar`}
            to="/"
          >
            Progress Bar
          </Link>
        </li>
        <li>
          <Link
            onClick={handleComponentSelect}
            data-component-name={`CharacterContainer`}
            to="/"
          >
            Character Container
          </Link>
        </li>
      </ul>
    </div>
  )
};
