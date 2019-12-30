export const SET_SELECTED_COMPONENT = "SET_SELECTED_COMPONENT";

const initialState = {
  selectedComponent: "CharacterContainer",
};

export const rootReducer = (state = initialState, action) => {
  console.log("Payload::  ", action.payload)
  switch(action.type) {
    case SET_SELECTED_COMPONENT:
      return {
        ...state,
        ...action.payload,
      }
    default: return state;
  }
};
