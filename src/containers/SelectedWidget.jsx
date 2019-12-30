import React, { Fragment, createElement, useState, useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import {
  CharacterContainer,
  Accordion,
  ProgressBar,
} from "../containers";
import { AutoComplete } from "../components";

const componentMap = {
  Accordion,
  ProgressBar,
  AutoComplete,
  CharacterContainer,
};

export const SelectedWidget = (props) => {

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
