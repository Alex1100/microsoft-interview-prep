export const SET_PERCENTAGE = "SET_PERCENTAGE";
export const SET_DEFAULT_COLOR = "SET_DEFAULT_COLOR";
export const SET_DISPLAY_PERCENTAGE_VISIBILITY = "SET_DISPLAY_PERCENTAGE_VISIBILITY";

const initialState = {
  percentLoaded: 50,
  displayPercentageNumber: true,
  defaultColor: "darkseagreen",
};

export const progressBarReducer = (state = initialState, action) => {
  console.log("Payload::  ", action.payload)

  switch(action.type) {
    case SET_PERCENTAGE:
    case SET_DEFAULT_COLOR:
    case SET_DISPLAY_PERCENTAGE_VISIBILITY:
      return {
        ...state,
        ...action.payload,
      }
    default: return state;
  }
};
