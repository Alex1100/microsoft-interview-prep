import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SelectedWidget from "./containers/SelectedWidget";
import NavBar from "./components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <SelectedWidget />
        </Route>

        <Route path="/component/:selectedComponent">
          <SelectedWidget />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
