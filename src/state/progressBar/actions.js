import { SET_PERCENTAGE, SET_DEFAULT_COLOR } from "../";
import { store } from "../../stores";

export const setDisplayPercentageVisibility = ({ displayPercentageNumber = true }) => {
  let state = store.getState();

  return {
    type: SET_DISPLAY_PERCENTAGE_VISIBILITY,
    payload: {
      displayPercentageNumber,
    },
  };
};

export const setBarColor = ({ defaultColor }) => {
  let state = store.getState();

  return {
    type: SET_DEFAULT_COLOR,
    payload: {
      defaultColor,
    },
  };
};


export const setPercentage = ({ percentLoaded }) => {
  let state = store.getState();
  return {
    type: SET_PERCENTAGE,
    payload: {
      percentLoaded,
    },
  };
};
