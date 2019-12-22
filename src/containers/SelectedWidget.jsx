import React from "react";
import { useParams } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "../components/Accordion";
import AutoComplete from "../components/AutoComplete";
import ProgressBar from "../components/ProgressBar";

const SelectedWidget = () => {
  let param = useParams();
  if (!param.selectedComponent) {
      param = "accordion";
  } else {
    param = param.selectedComponent;
  }
  
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  };

  const getRandomColor = () => {
    const colors = [
      "lightblue",
      "lime",
      "darkseagreen",
      "lightgreen",
      "powderblue",
      "crimson",
      "indigo"
    ];
    return colors[getRandomIntInclusive(0, colors.length - 1)];
  };

  const components = {
    accordion: {
      component: Accordion,
      props: {}
    },
    autocomplete: {
      component: AutoComplete,
      props: {}
    },
    progressBar: {
      component: ProgressBar,
      props: {
        displayPercentageNumber: true,
        progressPercentage: getRandomIntInclusive(0, 100),
        defaultColor: getRandomColor()
      }
    }
  };

  const renderSelectedComponent = () => {
    let selectedComponent = param;
    let Component = components[selectedComponent].component;
    return <Component {...components[selectedComponent].props} />;
  };

  return (
    <React.Fragment>
      <Container className="p-3">
        <Jumbotron>
          {renderSelectedComponent()}
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
};

export default SelectedWidget;
