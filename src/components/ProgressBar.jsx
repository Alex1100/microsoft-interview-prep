import React, { Fragment } from 'react';

const ProgressBar = ({ displayPercentageNumber = false, percentLoaded, defaultColor = "darkseagreen" }) => (
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


export default ProgressBar;
