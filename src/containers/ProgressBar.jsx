import React, { Fragment, Component } from 'react';
import {
  setBarColor,
  setPercentage,
  setDisplayPercentageVisibility,
} from "../state";
import { connect } from "react-redux";

class ProgressBarClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      defaultColor,
      percentLoaded,
      displayPercentageNumber,
    } = this.props;

    console.log('props: ', this.props);

    return (
      <Fragment>
        {displayPercentageNumber && <h1 style={{ textAlign: "center" }}>{percentLoaded}% complete</h1>}
        <div style={{
          display: "inline-flex",
          backgroundColor: "lightgrey",
          border: "2px",
          borderRadius: "12px",
          width: "100%",
          height: "28px"
        }}>
          <div style={{
            display: "inline-flex",
            backgroundColor: defaultColor,
            borderRadius: "10px",
            border: "solid 2px white",
            width: `${percentLoaded}%`,
            height: "28px"
          }} />
        </div>
      </Fragment>
    );
  }
};


const mapStateToProps = state => {
  const { progressBarReducer } = state;
  const {
    defaultColor,
    percentLoaded,
    displayPercentageNumber,
  } = progressBarReducer;

  return {
    defaultColor,
    percentLoaded,
    displayPercentageNumber,
  };
};

const mapDispatchToProps = dispatch => ({
  setVisibility: (visibile) => dispatch(setDisplayPercentageVisibility(visible)),
  setColor: (color = "darkseagreen") => dispatch(setBarColor(color)),
  setPercentageVal: (percentLoaded) => dispatch(setPercentage(percentLoaded)),
});

export const ProgressBar = connect(mapStateToProps, mapDispatchToProps)(ProgressBarClass);
