import React, { Fragment, createElement, useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "../containers/Accordion";
import ProgressBar from "../containers/ProgressBar";
import AutoComplete from "../components/AutoComplete";

const componentMap = {
  Accordion,
  ProgressBar,
  AutoComplete,
};

const SelectedWidget = (props) => {

  const renderSelectedComponent = () => {
    const Component = componentMap[props.selectedComponent];
    return <Component {...props} />
  };

  const renderedComponent = renderSelectedComponent();
  return (
    <Fragment>
      <Container className="p-3">
        <Jumbotron>
          {renderSelectedComponent()}
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default SelectedWidget;
