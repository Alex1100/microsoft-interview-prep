import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "./components/Accordion";
import AutoComplete from "./components/AutoComplete";
import ProgressBar from "./components/ProgressBar";
const API_BASE_URL = window.location.href;
import "./App.css";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("progressBar");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState('');
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

  useEffect(() => {
    if (!dataLoaded) {
      const params = {
        name: "Alex",
      };

      axios
        .get(`${API_BASE_URL}get-name`, {params})
        .then(response => {
          if (response.data) {
            console.log("RESPONSE IS: ", response);
            setDataLoaded(true);
            if (response.data.name) {
              setData(response.data.name);
            }
          }
        })
        .catch(err => console.log("ERR MAKING EXPRESS REQUEST: ", err));
    }

    return () => setDataLoaded(false);
  }, []);

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

  const handleComponentSelect = e => {
    if (e.target && e.target.getAttribute("data-component-name")) {
      setSelectedComponent(e.target.getAttribute("data-component-name"));
    }
  };

  const renderSelectedComponent = () => {
    let Component = components[selectedComponent].component;
    return <Component {...components[selectedComponent].props} />;
  };
  return (
    <Container className="p-3">
      <Jumbotron>
        <div>
          <h1>{data}</h1>
          {Object.keys(components).map((key, index) => {
            return (
              <Fragment>
                <button
                  key={`btn_${key}_${index}`}
                  data-component-name={key}
                  onClick={handleComponentSelect}
                >
                  {key}
                </button>
              </Fragment>
            );
          })}
          <div
            style={{
              marginTop: "5%"
            }}
          >
            {renderSelectedComponent()}
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default App;
