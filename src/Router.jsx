import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { SelectedWidget } from "./containers";
import { NavBar } from "./components";
import { connect } from "react-redux";
import { setSelectedComponent } from "./state";

class RouterClass extends Component {
  constructor(props) {
    super(props);
  }

  handleComponentSelect = (evt) => {
    evt.preventDefault();
    let selected = evt.target.getAttribute("data-component-name");
    this.props.selectComponent(selected);
  }


  render() {
    const navBarProps = {
      ...this.props,
      handleComponentSelect: this.handleComponentSelect,
    };

    return (
      <BrowserRouter>
        <NavBar {...navBarProps} />

        <Switch>
          <Route exact path="/">
            <SelectedWidget {...{selectedComponent: this.props.selectedComponent}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
};

const mapStateToProps = (state) => {
  const { rootReducer } = state;
  const { selectedComponent } = rootReducer;
  return {
    selectedComponent,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectComponent: (selected) => dispatch(setSelectedComponent(selected)),
});

export const Router = connect(mapStateToProps, mapDispatchToProps)(RouterClass);
