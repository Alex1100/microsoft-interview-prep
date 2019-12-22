import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const API_BASE_URL = window.location.href;
import "./App.css";
import Router from "./Router";


const App = () => {
    return (
      <Fragment>
        <Router />
      </Fragment>
    );
};

export default App;
