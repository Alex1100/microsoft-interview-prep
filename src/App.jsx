import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./stores";
console.log("STORE: ", store);
const API_BASE_URL = window.location.href;
import "./App.css";
import Router from "./Router";
import {
  AccordionProvider,
} from "./providers/accordionProvider";

const App = () => {
    return (
      <Fragment>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AccordionProvider>
              <Router />
            </AccordionProvider>
          </PersistGate>
        </Provider>
      </Fragment>
    );
};

export default App;
